import { getEducationData as getDigitalCampusData } from './digital-campus.data';
import { getEducationData as getOpquastData } from './opquast.data';

export function getEducationsData(lang: string) {
    return {
        'digital-campus': getDigitalCampusData(lang),
        'opquast': getOpquastData(lang),
    };
}
