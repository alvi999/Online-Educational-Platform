
import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import * as bcrypt from 'bcrypt';
  
  @Entity('Allusers')
   export class AllUsers {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, nullable: false })
    username: string;

  
    @Column({ unique: true, nullable: false })
    password: string;
  
  }
  