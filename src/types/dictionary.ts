export interface Dictionary {
    menu:         Menu;
    hero:         Hero;
    services:     Services;
    whyUs:        WhyUs;
    technologies: Technologies;
    mission:      {title: string, description: string};
    vision:       {title: string, description: string};
    committed:    {title: string, description: string};
    testimonials: Testimonials;
    pricing:      Pricing;
    contact: Contact;
}

export interface Hero {
    title:    string;
    subTitle: string;
    btnLeft:  string;
    btnRight: string;
}

export interface Menu {
    home:         string;
    about:        string;
    services:     string;
    testimonials: string;
    technologies: string;
    contact:      string;
}

export interface Pricing {
    title:            string;
    btnTxt:           string;
    subtitle:         string;
    pack1:            string;
    pack1Description: string;
    pack2:            string;
    pack2Description: string;
    pack3:            string;
    pack3Description: string;
    prod1:            string;
    prod2:            string;
    prod3:            string;
    prod4:            string;
    prod5:            string;
    prod6:            string;
    prod7:            string;
    prod8:            string;
    prod9:            string;
    prod10:           string;
    prod11:           string;
    prod12:           string;
}

export interface Services {
    title:         string;
    subtitle:      string;
    service1Title: string;
    service1Desc:  string;
    service2Title: string;
    service2Desc:  string;
    service3Title: string;
    service3Desc:  string;
    service4Title: string;
    service4Desc:  string;
    service5Title: string;
    service5Desc:  string;
    service6Title: string;
    service6Desc:  string;
}

export interface Technologies {
    title: string;
}

export interface Testimonials {
    title:        string;
    subtitle:     string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
}

export interface WhyUs {
    title:       string;
    description: string;
    reason1:     string;
    reason2:     string;
    reason3:     string;
    reason4:     string;
    reason5:     string;
    reason6:     string;
}

export interface Contact {
    title: string,
    subTitle: string,
    label1: string,
    placeholder1:string,
    label2: string,
    placeholder2:string,
    label3: string,
    placeholder3:string,
    btn: string,
    title2: string,
    subTitle2: string,

}