import { Dic } from '../../../../core/models';

export interface WorkingExperienceDto {
  companyName: string;
  companyWebsiteAddress: string;
  companyDescription: string;
  positions: Position[];
}

interface Position {
  positionName: string;
  positionLevel: string;
  positionDescription: string;
  positionStartDate: Date | null;
  positionEndDate: Date | null;
}


export enum PositionLevel {
  Junior = 'JUNIOR',
  Middle = 'MIDDLE',
  Senior = 'SENIOR',
}

export const PositionLevels: Dic<PositionLevel>[] = [
  {
    key: PositionLevel.Junior,
    value: 'ჯუნიორი',
  },
  {
    key: PositionLevel.Middle,
    value: 'საშუალო (მიდლი)',
  },
  {
    key: PositionLevel.Senior,
    value: 'სენიორი',
  }
]
