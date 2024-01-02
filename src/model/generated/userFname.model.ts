import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {User} from "./user.model"

@Entity_()
export class UserFname {
    constructor(props?: Partial<UserFname>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => User, {nullable: true})
    user!: User

    @Column_("text", {nullable: false})
    fname!: string

    @Column_("text", {nullable: true})
    tokenURI!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createdAtBlock!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    createdAtTimestamp!: bigint | undefined | null
}
