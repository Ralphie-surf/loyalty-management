import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateBankCreditFacilityDto{

    @ApiProperty()
    readonly bankUniqueName: string;

    @ApiProperty()
    readonly facilityAccountNumber: string;

    @ApiProperty()
    readonly currency: string;

    @ApiProperty()
    readonly totalCredit: real;

    @ApiProperty()
    readonly creditAvailable: real;

    @ApiProperty()
    readonly startDate: Date;

    @ApiProperty()
    readonly endDate: Date;

    @ApiProperty()
    readonly creditIssueLimit: real;

    @ApiProperty()
    readonly active: boolean;
}
