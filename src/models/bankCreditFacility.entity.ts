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


/*
    @Column({type: 'enum', enum: TenantStatus, default: TenantStatus[TenantStatus.A]})
    status: TenantStatus;

    @ManyToOne(type => User, user => user.primaryContactForWhichTenants, {cascade: true, onUpdate: "CASCADE"})
    primaryContact: User

    @OneToOne(type => CustomTheme, customTheme => customTheme.tenant, {cascade: true})
    customTheme: CustomTheme

    //a user can be a team member of multiple tenants
    @OneToMany(type => TenantTeam, tenantTeam => tenantTeam.tenant, {cascade: true})
    teamMembers: TenantTeam[] //notice the array here

    @OneToMany(type => TenantAccountOfficer, tenantAccountOfficer => tenantAccountOfficer.tenant, {cascade: true})
    tenantAccountOfficers: TenantAccountOfficer[] //notice the array here
    /**
     * Below is used to determine if the tenant has a unique schema as per multitenancy pattern.
     */
/*
    @Column({default: true})
    uniqueSchema: boolean

    //Could not set this as both nullable and unique. With two nulls, there will be constraint violation. Solution is to handle check separately
    @Column({unique: true, nullable: true})
    customURLSlug: string

    @ManyToMany(type => Theme, theme => theme.tenants)
    themes: Theme[]

    @OneToMany(type => Billing, billing => billing.tenant)
    billings: Billing[] //notice the array here

    //Connection for this tenant
    @OneToOne(type => ConnectionResource, connectionResource => connectionResource.tenant)
    connectionResource: ConnectionResource;










*/
}
