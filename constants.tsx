import { MenuOption } from './types';

export const REGISTRATION_URL = "https://b2bmkt.lge.com/LP=13887";
export const SUPPORT_URL = "https://www.lg.com/ae/support/contact";

export const MENU_OPTIONS: MenuOption[] = [
    { id: 'training', label: '📘 Training Programs' },
    { id: 'resources', label: '💡 Technical Resources' },
    { id: 'certification', label: '⚙️ Certification Path' },
    { id: 'contact', label: '📞 Contact & Registration' },
];

export const BOT_RESPONSES: Record<string, string> = {
    'training': `We offer a variety of HVAC training programs, from VRF system design to installation and troubleshooting. Our courses are designed for all skill levels.\n\nYou can view the full schedule and register here: 👉 ${REGISTRATION_URL}`,
    'resources': `You can access our comprehensive library of technical resources including product guides, installation manuals, and service tips on the LG partner portal. For specific inquiries, please contact our support team.\n\nAccess resources here: 👉 ${REGISTRATION_URL}`,
    'certification': `LG offers structured certification levels—from Basic AC Fundamentals to Advanced VRF Systems. Each level helps you gain industry-recognized expertise and qualify for LG Partner programs.\n\nStart your journey today: 👉 ${REGISTRATION_URL}`,
    'contact': `Absolutely! You can reach our support and registration team via our official contact page: 👉 ${SUPPORT_URL}\n\nFor training registration, please use the main portal: 👉 ${REGISTRATION_URL}`
};