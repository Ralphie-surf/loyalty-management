import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBankCreditFacilityDto{

    @ApiProperty()
    @IsNotEmpty()
    readonly bankUniqueName: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly facilityAccountNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly currency: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly totalCredit: real;

    @ApiProperty()
    @IsNotEmpty()
    readonly creditAvailable: real;

    @ApiProperty()
    @IsNotEmpty()
    readonly startDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    readonly endDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    readonly creditIssueLimit: real;

    @ApiProperty()
    readonly active: boolean;
}

export class CreateBankCreditFacilityDtos{
    dtos: CreateBankCreditFacilityDto[];
}







