import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Profile} from './profile.entity';
import {Role} from './role.entity';
import {BaseEntity} from "./base.entity";
import {Override} from "@nestjsx/crud";

@Entity('rem')
export class Rem {

    @PrimaryGeneratedColumn('uuid')
    id: any

    @Column({type: 'varchar', nullable: true})
    email: string;

    @Column({type: 'varchar', length: 200, nullable: true})
    birthPlace: string;

    @Column({type: 'varchar', length: 200, nullable: true})
    fullName: string;

    @Column({type: 'varchar', length: 30, nullable: true})
    phone: string;

    @Column({type: 'date', nullable: true})
    birthDate: Date;

    @Column({type: 'varchar', length: 200, nullable: true})
    video: string;

    @Column({type: 'varchar', length: 200, nullable: true})
    signing: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;
}
