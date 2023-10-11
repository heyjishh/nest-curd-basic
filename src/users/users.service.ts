import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  customDB: any = [];
  create(createUserDto: CreateUserDto) {
    if (this.customDB.length > 0) {
      this.customDB.find((user: any) => {
        console.log("user", user)
        if (user.id == createUserDto.id) {
          return "User already exist with this id";
        } else this.customDB.push(createUserDto);
      })
    } else this.customDB.push(createUserDto);
    return this.customDB;
  }

  findAll() {
    return this.customDB;
  }

  findOne(id: number) {
    try {
      if (this.customDB[id] == undefined || this.customDB[id] == null) {
        throw new Error("No user found with this id");
      }

      return this.customDB[id];
    } catch (error) {
      console.log("error", error)
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if (this.customDB[id] == undefined || this.customDB[id] == null) {
        throw new Error("No user found with this id");
      }

      this.customDB[id] = updateUserDto;
      return this.customDB[id];

    } catch (error) {
      console.log("error", error)
    }
  }

  remove(id: number) {
    try {
      if (this.customDB[id] == undefined || this.customDB[id] == null) {
        throw new Error("No user found with this id");
      }

      delete this.customDB[id];
      return this.customDB;
    } catch (error) {
      console.log("error", error)
    }
  }
}
