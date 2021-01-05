import { Column, Entity, Generated, Index, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";


@Entity()
export class bankCreditFacility{
    
    @Generated("uuid")
    uuid: string;

    @Column({unique: true})//used for default URL Slug
    @Index()
    bankUniqueName: string

    @Column({unique: true})
    facilityAccountNumber: string

    @Column({nullable: false})
    currency: string

    @Column({nullable: true})
    totalCredit: real 

    @Column()
    creditAvailable: real

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @Column()
    creditIssueLimit: real

    @Column({default: false})
    active: boolean









/*uuid: uuid (generated)
customerUUID: uuid (as in customer uuid)
merchantUUID: uuid (as in merchant uuid)
loyaltyStatus: enum of LoyaltyStatusTypes
applicableDiscount: real (percentage)
applicableCredit: real
applicableInstallments: integer (number of installments)
active: boolean
triggeringTransactionId: one-to-one relationship with Transactions
automaticallyCalculated: boolean
*/