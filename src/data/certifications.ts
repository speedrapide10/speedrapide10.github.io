export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  type: 'svg' | 'text';
  hoverBorder: string;
  svgPath?: string;
  svgViewBox?: string;
  textBadge?: string;
}

export const certifications: Certification[] = [
  {
    id: 'rhcsa',
    title: 'RHCSA',
    subtitle: 'Red Hat Certified',
    color: '#EE0000',
    type: 'svg',
    hoverBorder: 'hover:border-[#EE0000]/60 hover:shadow-[0_0_25px_rgba(238,0,0,0.15)]',
    svgViewBox: '0 0 640 640',
    svgPath: 'M405.5 349.6C439.2 349.6 487.8 342.7 487.8 302.6C488 295.9 488.7 300.8 466.9 206.4C462.3 187.3 458.2 178.6 424.6 161.8C398.5 148.5 341.7 126.4 324.9 126.4C309.2 126.4 304.7 146.6 286 146.6C268 146.6 254.7 131.5 237.9 131.5C221.8 131.5 211.2 142.5 203.1 165.1C175.6 242.7 176.8 239.4 177 243.4C177 268.2 274.6 349.5 405.5 349.5zM493 318.8C497.7 340.8 497.7 343.1 497.7 346C497.7 383.7 455.4 404.6 399.7 404.6C274 404.7 163.8 331 163.8 282.3C163.8 275.5 165.2 268.8 167.9 262.6C122.7 264.9 64.1 272.9 64.1 324.6C64.1 409.3 264.7 513.6 423.6 513.6C545.4 513.6 576.1 458.5 576.1 415C576.1 380.8 546.5 342 493.2 318.8z'
  },
  {
    id: 'nse',
    title: 'NSE',
    subtitle: 'Fortinet Certified',
    color: '#EE3124',
    type: 'svg',
    hoverBorder: 'hover:border-[#EE3124]/60 hover:shadow-[0_0_25px_rgba(238,49,36,0.15)]',
    svgViewBox: '0 0 24 24',
    svgPath: 'M0 9.785h6.788v4.454H0zm8.666-6.33h6.668v4.453H8.666zm0 12.637h6.668v4.454H8.666zm8.522-6.307H24v4.454h-6.812zM2.792 3.455C1.372 3.814.265 5.404 0 7.425v.506h6.788V3.454zM0 16.091v.554c.24 1.926 1.276 3.466 2.624 3.9h4.188v-4.454zm24-8.184v-.506c-.265-1.998-1.372-3.587-2.792-3.972h-4.02v4.454H24zM21.376 20.57c1.324-.458 2.36-1.974 2.624-3.9v-.554h-6.812v4.454Z'
  },
  {
    id: 'scrum',
    title: 'Scrum SFC',
    subtitle: 'SCRUMstudy Certified',
    color: '#F26D21',
    type: 'svg',
    hoverBorder: 'hover:border-[#F26D21]/60 hover:shadow-[0_0_25px_rgba(242,109,33,0.15)]',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z'
  },
  {
    id: 'efset',
    title: 'EF SET',
    subtitle: 'English B2 Upper Intermediate',
    color: '#0073B1',
    type: 'text',
    hoverBorder: 'hover:border-[#0073B1]/60 hover:shadow-[0_0_25px_rgba(0,115,177,0.15)]',
    textBadge: 'EF'
  }
];
