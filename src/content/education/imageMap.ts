import digitalCampusLogo from '../../assets/education/digital-campus/logo.svg';
import opquastLogo from '../../assets/education/opquast/logo.svg';
import opquastBadge from '../../assets/education/opquast/badge.svg';

const educationImages: Record<string, { logo?: any; badge?: any }> = {
    'digital-campus': {
        logo: digitalCampusLogo,
    },
    'opquast': {
        logo: opquastLogo,
        badge: opquastBadge,
    },
};

export function getEducationImages(slug: string) {
    return educationImages[slug] || {};
}
