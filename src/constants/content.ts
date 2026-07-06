export interface NavLink {
	href: string;
	label: string;
}

export interface FocusArea {
	no: string;
	label: string;
}

export interface Program {
	no: string;
	name: string;
	desc: string;
}

export interface LedgerEntry {
	label: string;
	value: string;
	suffix?: string;
}

export interface Figure {
	count: number;
	display: string;
	unit?: string;
	cap: string;
}

export interface TimelineItem {
	year: string;
	title: string;
	body: string;
}

export interface Branch {
	no: string;
	name: string;
}

export interface ContactInfo {
	address: string[];
	phones: { label: string; href: string }[];
	email: string;
	website: string;
	director: string;
}

export const navLinks: NavLink[] = [
	{ href: '#mission', label: 'Mission' },
	{ href: '#programs', label: 'Programs' },
	{ href: '#story', label: 'Self-help' },
	{ href: '#history', label: 'History' },
	{ href: '#reach', label: 'Reach' },
	{ href: '#contact', label: 'Contact' },
];

export const ledgerEntries: LedgerEntry[] = [
	{ label: 'Members served', value: '5,000' },
	{ label: 'Branches across Imo State', value: '10' },
	{ label: 'Field & office staff', value: '17' },
	{ label: 'Years of practice', value: '40', suffix: 'yrs' },
];

export const focusAreas: FocusArea[] = [
	{ no: '01', label: 'Microfinance & small-enterprise credit' },
	{ no: '02', label: 'Enterprise & livelihood development' },
	{ no: '03', label: 'Education & early-childhood care' },
	{ no: '04', label: 'Agriculture & food processing' },
	{ no: '05', label: 'Health & environmental hygiene' },
];

export const programs: Program[] = [
	{
		no: '01',
		name: 'Microfinance',
		desc: 'Small loans and savings to primary groups of women, repaid and recycled into the next member.',
	},
	{
		no: '02',
		name: 'Enterprise development',
		desc: 'Business skills, record-keeping and mentoring that turn a single stall into a going concern.',
	},
	{
		no: '03',
		name: 'Education & childcare',
		desc: 'Early-child care programmes and youth development so the next generation starts further ahead.',
	},
	{
		no: '04',
		name: 'Agriculture & food',
		desc: 'Training and support in farming, food processing and production for rural co-operatives.',
	},
	{
		no: '05',
		name: 'Health & hygiene',
		desc: 'Environmental education and sanitation in schools and communities across our branches.',
	},
];

export const figures: Figure[] = [
	{ count: 5000, display: '5,000', cap: 'members reached through credit and training' },
	{ count: 10, display: '10', unit: ' branches', cap: 'local offices serving rural Imo State' },
	{ count: 40, display: '40', unit: ' years', cap: 'of unbroken practice since 1984' },
	{ count: 17, display: '17', unit: ' staff', cap: 'field and office team behind every loan' },
];

export const timeline: TimelineItem[] = [
	{
		year: '1984',
		title: 'An idea on paper',
		body: 'ISHO begins as an academic project at the Centre for Applied Religion and Education, Ibadan, under the theme "Finding Alternatives for the Poor," coordinated by Godson C. Echefu.',
	},
	{
		year: '1989',
		title: 'Into the field',
		body: 'The work begins informally as the Mbaitoli-Ikeduru Self Help Organization (MISHO), serving the two local government areas it was named for.',
	},
	{
		year: '1990',
		title: 'Imo Self Help Organization is born',
		body: 'Registered with the Imo State Ministry of Trade & Industries, Cooperative Division, and renamed for the whole state as its scope widened.',
	},
	{
		year: '1995',
		title: 'On the national register',
		body: 'Incorporated with the Corporate Affairs Commission (CAC), the legal backing that opened doors to international partners and a far larger reach.',
	},
];

export const branches: Branch[] = [
	{ no: '01', name: 'Mbaitoli' },
	{ no: '02', name: 'Ikeduru' },
	{ no: '03', name: 'Mbaise' },
	{ no: '04', name: 'Mbano' },
	{ no: '05', name: 'Ideato' },
	{ no: '06', name: 'Owerri' },
	{ no: '07', name: 'Ohaji' },
	{ no: '08', name: 'Okigwe' },
	{ no: '09', name: 'Nkwerre / Orlu' },
	{ no: '10', name: 'Abaja-Anara / Amaraku' },
];

export const partners: string[] = [
	'European Union',
	'UNDP Nigeria',
	'Five Talents International (USA)',
	'G.B.F. / MTNF',
	'Ausaid',
];

export const networks: string =
	'Forum for Imo NGOs (FINGO) · CRUDAN · Community Development & Microfinance Round Table (CDMR) · Action for Development Network (ADNET) · Shelter Rights Initiative · NIPRAMET · CASCAFA · Transition Monitoring Group (TMG).';

export const donationAmounts: string[] = ['5,000', '10,000', '20,000', '50,000', 'Other'];

export const contact: ContactInfo = {
	address: [
		'1 Works Road, Owerri, Imo State, Nigeria',
		'(1st house on the right side of the main gate)',
	],
	phones: [
		{ label: '+234 803 339 0600', href: 'tel:+2348033390600' },
		{ label: '+234 803 742 9567', href: 'tel:+2348037429567' },
	],
	email: 'info@isho-nigeria.org',
	website: 'www.isho-nigeria.org',
	director: 'Executive Director: Godson Ogechukwu Echefu',
};
