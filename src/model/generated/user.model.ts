import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {UserFname} from "./userFname.model"

@Entity_()
export class User {
    constructor(props?: Partial<User>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fId!: bigint

    @Column_("text", {nullable: false})
    address!: string

    @Column_("text", {nullable: true})
    url!: string | undefined | null

    @OneToMany_(() => UserFname, e => e.user)
    fnames!: UserFname[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createdAtBlock!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    createdAtTimestamp!: bigint | undefined | null
}
