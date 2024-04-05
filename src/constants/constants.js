import { ReactComponent as Brex } from '../assets/svg/brex_logo_footer.svg';
import { ReactComponent as EmpireCompany } from '../assets/svg/empire_company.svg';
import { ReactComponent as ScaleCompany } from '../assets/svg/scale_company.svg';
import { ReactComponent as AvenueOneCompany } from '../assets/svg/avenue_one_company.svg';

export const footer = [
    { id: 1, channelName: <Brex /> },
    { id: 2, channelName: 'Product', firstPage: 'Overview', secondPage: 'Business Account', thirdPage: 'Credit Card', fourthPage: 'Rewards', fifthPage: 'Financial Modeling', sixthPage: 'Expense tracking', seventhPage: 'Spend management', eigthPage: 'Bill pay', ninethPage: 'Integrations', tenthPage: 'Brex API', eleventhPage: 'Pro access', twelethPage: 'Security' },
    { id: 3, channelName: 'Company', firstPage: 'About Brex', secondPage: 'Careers', thirdPage: 'Contact', fourthPage: 'Press', fifthPage: 'Blog' },
    { id: 4, channelName: 'Product', firstPage: 'Help', secondPage: 'Status', thirdPage: 'Privacy', fourthPage: 'Legal agreement', fifthPage: 'Cookie preferences' }
]

export const companies = [
    { id: 1, companyLogo: <EmpireCompany />, description: 'Empire enables spend and drives accountability in Orangetheory studios with Brex Empower.', readCaseStudy: 'Read case study', },
    { id: 2, companyLogo: <ScaleCompany />, description: 'Scale AI unblocks employee spend to ensure speed while boosting control and accountability.', readCaseStudy: 'Read case study', },
    { id: 3, companyLogo: <AvenueOneCompany />, description: 'Avenue One drives automation and accuracy, saving 15 hours a month with Brex Empower and NetSuite.', readCaseStudy: 'Read case study', }
]