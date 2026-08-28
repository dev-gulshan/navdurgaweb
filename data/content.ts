export const cloud = "https://res.cloudinary.com/dknrenrn0/image/upload";
export const heroSlides = [
 {title:"Steel Business",text:"We manufacture quality steel products.",image:`${cloud}/v1741281715/2_ltzek0.png`},
 {title:"Ethanol Business",text:"Five projects with a combined planned capacity of 1000 KLD are under construction across India.",image:`${cloud}/v1741187336/event3_k5broi.jpg`},
 {title:"Mining Business",text:"Strategic partnerships supporting reliable mineral supply and energy production needs.",image:`${cloud}/v1741281719/mining_lxn15n.png`}
];


export type BusinessContentBlock =
  | { type: "heading"; title: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "companyCards"; variant: "owned" | "associated"; items: { title: string; details: string[] }[] }
  | { type: "table"; rows: string[][] };

export type BusinessItem = {
  slug: string;
  legacyId: string;
  title: string;
  eyebrow: string;
  desc: string;
  cardImage: string;
  heroImage: string;
  blocks: BusinessContentBlock[];
  gallery: string[];
  videos: string[];
  links: string[];
};

export const businessPageContent = {
  hero: {
    eyebrow: "Navdurga Group",
    title: "Our Businesses",
    description: "A diversified portfolio built on industrial capability, responsible growth and long-term value creation.",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189655/business_hj5gzt.jpg"
  },
  intro: {
    label: "Diverse strengths. One vision.",
    title: "Building enterprises that move industries and communities forward.",
    description: "From steel and clean energy to aviation, education, real estate and logistics, each Navdurga business is shaped by operational discipline and a commitment to sustainable progress."
  }
};

export const businesses: BusinessItem[] = [
  {
    "slug": "steel",
    "legacyId": "steel",
    "title": "Steel",
    "eyebrow": "Business Vertical 01",
    "desc": "We have five operating assets, two In Andhra Pradesh /Telangana, one in Bellary Karnataka, one in Raigarh Chhatisgarh and one in Odisha. We manufacture TMT wire rod and structures.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189664/steel_sryvre.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284093/steel_tbe6mv.png",
    "blocks": [
          {
                "type": "heading",
                "title": "IRON & STEEL"
          },
          {
                "type": "paragraph",
                "text": "We have five operating assets, two in Andhra Pradesh / Telangana, one in Bellary, Karnataka, one in Raigarh, Chhattisgarh and one in Odisha. We manufacture TMT, wire rod and structures."
          },
          {
                "type": "list",
                "ordered": false,
                "items": [
                      "SCAN ENERGY & POWER LTD",
                      "RAYALASEEMA INDUTRIES (INDIA) PVT LTD",
                      "SCAN STEELS LTD",
                      "NAVDURGA FUELS PVT LTD",
                      "ROURKELA SPONGE LLP"
                ]
          },
          {
                "type": "heading",
                "title": "The Navdurga Group directly owns and operates 5 steel producing companies."
          },
          {
                "type": "companyCards",
                "variant": "owned",
                "items": [
                      {
                            "title": "SCAN ENERGY & POWER LTD",
                            "details": [
                                  "Address: Works — Survey No. 34, 35 & 36, Kondurg Village, Shadnagar - 509207, Dist. Rangareddy, Telangana.",
                                  "GSTIN No.: 36AAMCS1851L1ZX",
                                  "Installed Capacity: Billet — 500 TPD; TMT — 500 TPD; Wire Rod — 500 TPD."
                            ]
                      },
                      {
                            "title": "RAYALASEEMA INDUTRIES (INDIA) PVT LTD",
                            "details": [
                                  "Address: Sy. No. 115/2/A/A, Theegapur Village, Kothur Mandal, Dist. Rangareddy, Telangana - 509228.",
                                  "GSTN: 36AACCR8836N1ZP",
                                  "Installed Capacity: Billet — 150 TPD; TMT — 150 TPD; Structurals — 150 TPD."
                            ]
                      },
                      {
                            "title": "SCAN STEELS LTD",
                            "details": [
                                  "Address: Survey No. 284/A, 283/B, 400/A1, 285/B1, Haraginadoni Road, Veniverrapur Village, Ballary, Karnataka - 583115.",
                                  "GST No.: 29AABCM6734H1ZA",
                                  "Installed Capacity: Sponge Iron — 200 TPD."
                            ]
                      },
                      {
                            "title": "NAVDURGA FUELS PVT LTD",
                            "details": [
                                  "Address: Saraipali, Gharghora Road, Raigarh, Chhattisgarh - 496001.",
                                  "GST: 22ABCN9131F1ZU",
                                  "Installed Capacity: Sponge — 300 TPD; Billet — 79,200 Ton/Annum; TMT — 100,000 Ton/Annum; CPP — 12 MW; Coal Washeries — 50 TPH."
                            ]
                      },
                      {
                            "title": "ROURKELA SPONGE LLP",
                            "details": [
                                  "Address: Balanda, Kalunga, Dist. Sundergarh, Odisha - 770031.",
                                  "GST: 21AAWFR7896M1Z2",
                                  "Installed Capacity: Sponge — 200 TPD."
                            ]
                      }
                ]
          },
          {
                "type": "heading",
                "title": "OUR ASSOCIATED COMPANIES"
          },
          {
                "type": "companyCards",
                "variant": "associated",
                "items": [
                      {
                            "title": "RAYEN STEELS PRIVATE LIMITED",
                            "details": [
                                  "Address: Survey No. 1115D/E, Haraginadoni Road, Veni Veerapura Village, Hospet Road, Bellary, Karnataka.",
                                  "GST No.: 29AACCR9591A1Z5",
                                  "Installed Capacity: Sponge Iron — 250 TPD."
                            ]
                      },
                      {
                            "title": "BILASRAIKA SPONGE IRON INDIA PVT LIMITED",
                            "details": [
                                  "Address: Factory Sy. No. 159–164, Village Gundla Potla Pally, Rajapur Mandal, Mahboob Nagar, Telangana - 509301.",
                                  "GST: 36AACCB1598B1ZX",
                                  "Installed Capacity: Sponge Iron — 200 TPD."
                            ]
                      },
                      {
                            "title": "SCANIA STEEL & POWER LIMITED",
                            "details": [
                                  "Address: 22 KM Stone, Gharghora Road, Punjipatra, Raigarh, Chhattisgarh - 496011.",
                                  "GST No.: 22AAHCS4471R1ZT",
                                  "Installed Capacity: Sponge Iron — 100 TPD × 4."
                            ]
                      },
                      {
                            "title": "RASHI STEEL & POWER LIMITED",
                            "details": [
                                  "Address: Praghat, Jayramnagar, Tehsil Masturi, Dist. Bilaspur, Chhattisgarh.",
                                  "GST No.: 22AAECR6450Q1ZO",
                                  "Installed Capacity: Pellet — 0.4 MTPA; Iron Ore Beneficiation — 1.9 MTPA."
                            ]
                      },
                      {
                            "title": "ARYAN ISPAT & POWER LIMITED",
                            "details": [
                                  "We have recently acquired a trading partnership with Aryan Ispat & Power Ltd., situated at Lapanga, Odisha, and have 100% sales rights for the sponge iron manufactured by the industry."
                            ]
                      }
                ]
          }
    ],
    "gallery": [],
    "videos": [],
    "links": [
      "https://shrishtiitmt.com/"
    ]
  },
  {
    "slug": "ethanol",
    "legacyId": "ethanol",
    "title": "Ethanol",
    "eyebrow": "Business Vertical 02",
    "desc": "We have recently acquired a land to set up an ethanol division under the company named Swadeshi Fuel LLP, located at Nawanagar Buxar in Bihar.We are also coming up with the most promising nation building projects of producing ethanol for petrol blending in five other locations with the overall capacity of 800 KLD Plants are being established in Chhattisgarh, Odisha, Andhra Pradesh & Madhya Pradesh. Nav Durga Group has recently started the production of Ethanol in our Raigarh unit.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189657/ethanol_bugqhf.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284086/ethanol_mjf3m7.png",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We have recently acquired a land to set up an ethanol division under the company named Swadeshi Fuel LLP, located at Nawanagar Buxar in Bihar.We are also coming up with the most promising nation building projects of producing ethanol for petrol blending in five other locations with the overall capacity of 800 KLD Plants are being established in Chhattisgarh, Odisha, Andhra Pradesh & Madhya Pradesh. Nav Durga Group has recently started the production of Ethanol in our Raigarh unit."
      }
    ],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "resorts",
    "legacyId": "resorts",
    "title": "Resorts",
    "eyebrow": "Business Vertical 03",
    "desc": "In our attempt to diversify and capture hospitality business, we have gone into strategic alliance with reputed Mayfair Group to build multiple resorts across India.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189663/resort_c9na1w.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284091/resort_nfp7uz.png",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In our attempt to diversify and capture hospitality business, we have gone into strategic alliance with reputed Mayfair Group to build multiple resorts across India."
      }
    ],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "real-estate",
    "legacyId": "realestate",
    "title": "Real Estate",
    "eyebrow": "Business Vertical 04",
    "desc": "To catch up with the tide of the booming real estate business in India, we have consciously created and initiated the brand and company Urban Developers and Builders to provide quality and energy efficient luxury living which is nature sentric.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189661/realestate_ytoj0k.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284100/realestate_q7tnkv.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "To catch up with the tide of the booming real estate business in India, we have consciously created and initiated the brand and company Urban Developers and Builders to provide quality and energy efficient luxury living which is nature sentric."
      }
    ],
    "gallery": [],
    "videos": [],
    "links": [
      "https://urbansereno.in/",
      "https://urbanmajestic.in/"
    ]
  },
  {
    "slug": "tea-gardens",
    "legacyId": "teagarden",
    "title": "Tea Gardens",
    "eyebrow": "Business Vertical 05",
    "desc": "Tea is an integral part of the culture in India, different parts of the country have different ways of consuming tea, we wish to be a part of this story for which the group has acquired strategically located tea gardens. We have entered into an judicious partnership with the Mayfair Hotels and Resorts, where we own 50% stake in two tea gardens situated at Jungpana and Maldiram in West Bengal. We also own a processing plant for the production of tea which is sold under the brand name of Mayfair tea.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189666/teagarden_ucquxe.jpg",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284095/teagarden_zddjd0.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Tea is an integral part of the culture in India, different parts of the country have different ways of consuming tea, we wish to be a part of this story for which the group has acquired strategically located tea gardens. We have entered into an judicious partnership with the Mayfair Hotels and Resorts, where we own 50% stake in two tea gardens situated at Jungpana and Maldiram in West Bengal. We also own a processing plant for the production of tea which is sold under the brand name of Mayfair tea."
      },
      {
        "type": "heading",
        "title": "Contact Details"
      }
    ],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "aviation",
    "legacyId": "aviation",
    "title": "Aviation",
    "eyebrow": "Business Vertical 06",
    "desc": "This is a dream project of our Group Mentor, his childhood dream was to fly high in the sky, he manifested the same via entering into the private aviation industry. The group has commenced its lease & rent aviation services under strategic partnerships with three aircrafts.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189653/aviation_wo71xv.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284083/aviation_pgnwtu.png",
    "blocks": [
      {
        "type": "paragraph",
        "text": "This is a dream project of our Group Mentor, his childhood dream was to fly high in the sky, he manifested the same via entering into the private aviation industry. The group has commenced its lease & rent aviation services under strategic partnerships with three aircrafts."
      },
      {
        "type": "heading",
        "title": "Aircraft- Cessna Citation 560 XL"
      },
      {
        "type": "table",
        "rows": [
          [
            "Passenger Capacity:",
            "8"
          ],
          [
            "Range with Full pax",
            "1100 nm"
          ],
          [
            "Range without Pax",
            "1300 nm"
          ],
          [
            "Max Speed",
            "400 kts"
          ],
          [
            "Aircraft Base",
            "Mumbai"
          ]
        ]
      },
      {
        "type": "heading",
        "title": "Aircraft- King Air C90A"
      },
      {
        "type": "table",
        "rows": [
          [
            "Passenger Capacity:",
            "6"
          ],
          [
            "Range with Full pax",
            "300 nm"
          ],
          [
            "Range without Pax",
            "600 nm"
          ],
          [
            "Max Speed",
            "180 kts"
          ],
          [
            "Aircraft Base",
            "Indore"
          ]
        ]
      },
      {
        "type": "heading",
        "title": "Aircraft- Cessna Caravan-208B"
      },
      {
        "type": "table",
        "rows": [
          [
            "Passenger Capacity:",
            "8"
          ],
          [
            "Range with Full pax",
            "500 nm"
          ],
          [
            "Range without Pax",
            "900 nm"
          ],
          [
            "Max Speed",
            "140 kts"
          ],
          [
            "Aircraft Base",
            "Rourkela"
          ]
        ]
      }
    ],
    "gallery": [],
    "videos": [],
    "links": [
      "https://www.navdurgaaviation.com/"
    ]
  },
  {
    "slug": "mining",
    "legacyId": "mining",
    "title": "Mining",
    "eyebrow": "Business Vertical 07",
    "desc": "India is a leading player in the global iron ore market, with abundant reserves primarily found in states like Odisha, Jharkhand, and Chhattisgarh. The mining of iron ores in India not only fuels the country's burgeoning steel industry but also plays a crucial role in contributing to the nation's economic growth. To be part of this growth story we have tied up with a mining giant called Narayani Sons Pvt Ltd under the able guidance of Mr.Vinay Passary with the MOD of two mines in Odisha situated at Kurloi and Radhikapur.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189660/mining_hkcjhx.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284089/mining_uonv89.png",
    "blocks": [
      {
        "type": "paragraph",
        "text": "India is a leading player in the global iron ore market, with abundant reserves primarily found in states like Odisha, Jharkhand, and Chhattisgarh. The mining of iron ores in India not only fuels the country's burgeoning steel industry but also plays a crucial role in contributing to the nation's economic growth. To be part of this growth story we have tied up with a mining giant called Narayani Sons Pvt Ltd under the able guidance of Mr.Vinay Passary with the MOD of two mines in Odisha situated at Kurloi and Radhikapur."
      }
    ],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "logistics",
    "legacyId": "logistic",
    "title": "Logistics",
    "eyebrow": "Business Vertical 08",
    "desc": "Road logistics in India form the backbone of the country's transportation network connecting remote villages to bustling urban centers. Despite challenges, the road transport sector is vital for the efficient movement of goods and passengers facilitating economic activities across diverse regions.We have entered into strategic partnership for creating infrastructure for transporting of bulk minerals such as coal, to the customers by rail and road. Thereby enabling growth and strengthening trade and commerce.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189658/logistic_w2l4nq.png",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284087/logistic_pcywag.png",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Road logistics in India form the backbone of the country's transportation network connecting remote villages to bustling urban centers. Despite challenges, the road transport sector is vital for the efficient movement of goods and passengers facilitating economic activities across diverse regions.We have entered into strategic partnership for creating infrastructure for transporting of bulk minerals such as coal, to the customers by rail and road. Thereby enabling growth and strengthening trade and commerce."
      }
    ],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "education",
    "legacyId": "education",
    "title": "Education",
    "eyebrow": "Business Vertical 09",
    "desc": "We have entered into a strategic and fruitful alliance with the Vikas Group of Institutions under the able leadership of Mr Dasari Murli Krishna for operating and running Rungta International School in the Rungta Educational Campus. Along with this we also run the AIPH university in Bhubaneswar. Apart from this under the Navdurga Educational and Charitable Trust we are also coming up with a school in Rajgangpur with the target of two thousand five hundred seats.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189655/education_kids4r.jpg",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741284085/education2_zwc8yg.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We have entered into a strategic and fruitful alliance with the Vikas Group of Institutions under the able leadership of Mr Dasari Murli Krishna for operating and running Rungta International School in the Rungta Educational Campus. Along with this we also run the AIPH university in Bhubaneswar. Apart from this under the Navdurga Educational and Charitable Trust we are also coming up with a school in Rajgangpur with the target of two thousand five hundred seats."
      },
      {
        "type": "paragraph",
        "text": "Vikas Group of Institutions and Nav Durga Group are proud to announce the expansion of their education footprint in Bhubaneswar by setting up the sprawling AIPH University at Pahala, Haridamada and Prachi Vihar."
      },
      {
        "type": "paragraph",
        "text": "The Krishna Vikas Gadodia International School was recently inaugurated amidst much fun and flare at Rajgangpur Odisha which is going to provide a strong platform for the future generations of students by enabling access to robust international facilities and methods of teaching and imparting a holistic opportunity for development of children."
      }
    ],
    "gallery": [
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123338/aiph1_cedywl.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123340/aiph8_jzcrdb.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123340/aiph7_n0ntyv.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123339/aiph4_fl5vfj.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123339/aiph5_etrxtv.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123339/aiph6_fcd1j3.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123338/aiph2_xtek3p.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777123338/aiph3_bpme1z.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777128797/square-image_lhwf0p.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127568/Rajgangpuroutput7_kptbyn.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127567/Rajgangpuroutput4_apcgom.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127568/Rajgangpuroutput5_jlpm08.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127569/Rajgangpuroutput1_qtubkj.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127568/Rajgangpuroutput6_cf1f3n.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127574/Rajgangpuroutput2_yekxlb.webp",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777127567/Rajgangpuroutput3_zep2pk.webp"
    ],
    "videos": [
      "https://res.cloudinary.com/dknrenrn0/video/upload/v1777122373/aiph-university-new-hd-new_kmqtza.mp4",
      "https://res.cloudinary.com/dknrenrn0/video/upload/v1777128623/Rajgangpuroutput_hmvqof.mp4"
    ],
    "links": []
  },
  {
    "slug": "biomass-pellet",
    "legacyId": "biomass-pellet",
    "title": "Biomass Pellet",
    "eyebrow": "Business Vertical 10",
    "desc": "Certified renewable fuel solutions made from agricultural residue for cleaner industrial energy.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/c_fill,w_555,h_355,g_auto/v1756136541/WhatsApp_Image_2025-08-22_at_5.25.44_PM_x8mava.jpg",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/c_fill,w_555,h_355,g_auto/v1756136541/WhatsApp_Image_2025-08-22_at_5.25.44_PM_x8mava.jpg",
    "blocks": [],
    "gallery": [],
    "videos": [],
    "links": []
  },
  {
    "slug": "railway-siding",
    "legacyId": "vertical-siding",
    "title": "Railway Siding",
    "eyebrow": "Business Vertical 11",
    "desc": "Railway Siding is a dedicated rail track connected to the main railway line that allows industries to load and unload goods directly at their facility. Key types include Private Sidings (built by industries such as ours) and Assisted Sidings (cost-shared with Railways).For a steel manufacturing business like ours, this infrastructure is a strategic advantage.",
    "cardImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777260782/verticalThumbnail1_a0ftyf.jpg",
    "heroImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259024/verticalThumbnail_zerus7.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Railway Siding is a dedicated rail track connected to the main railway line that allows industries to load and unload goods directly at their facility. Key types include Private Sidings (built by industries such as ours) and Assisted Sidings (cost-shared with Railways).For a steel manufacturing business like ours, this infrastructure is a strategic advantage."
      },
      {
        "type": "paragraph",
        "text": "It enables seamless bulk transportation of raw materials such as coal, iron ore, and finished steel products without reliance on road logistics. This significantly reduces freight costs, minimizes transit time, and ensures higher supply chain reliability. Additionally, it enhances operational efficiency, supports larger volumes, and lowers the carbon footprint, making the business more competitive and sustainable in the long run. The integration of a railway siding into Nav Durga Group’s operations is more than just an infrastructure upgrade—it is a strategic enabler of scale, efficiency, and long-term growth. By strengthening logistics capabilities and reducing operational dependencies, it positions the company to operate with greater agility, cost-effectiveness, and sustainability in an increasingly competitive steel industry."
      }
    ],
    "gallery": [
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259025/vertical4_exsrww.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259025/vertical2_llwyth.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259024/vertical3_xybvmg.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259024/6vertical1_yhibbx.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259024/vertical5_szvkh5.jpg",
      "https://res.cloudinary.com/dknrenrn0/image/upload/v1777259024/vertical1_zuqbcz.jpg"
    ],
    "videos": [
      "https://res.cloudinary.com/dknrenrn0/video/upload/v1777259040/vertical1Vid_ilja8k.mp4"
    ],
    "links": []
  }
];


export const products = [
 {title:"TMT",image:`${cloud}/v1741189259/tmt_ro3fiv.jpg`,text:"Thermo Mechanically Treated steel manufactured through the TEMPCORE process. Bars range from 8 mm to 32 mm and undergo rigorous weight, length and dimension testing as per IS 1786."},
 {title:"Wire Rod",image:`${cloud}/v1741189259/wire_mrlmkm.jpg`,text:"Hot-rolled wire rod manufactured from selected billets. The group has a standing capacity of 180,000 TPA."},
 {title:"Billet",image:`${cloud}/v1741189246/billet_ik8gih.jpg`,text:"Ductile square-section billets produced using continuous casting machines for dependable downstream rolling."},
 {title:"Structural Steel",image:`${cloud}/v1741189255/structural_gvgfbf.jpg`,text:"Cost-effective structural steel with a strong strength-to-weight ratio for buildings, roads, bridges and industrial applications."},
 {title:"Sponge Iron",image:`${cloud}/v1741189254/sponge_eghena.jpg`,text:"Direct reduced iron produced from hematite ore using a coal-based rotary kiln process, with consistent chemical and physical characteristics."},
 {title:"Pellets",image:`${cloud}/v1741189250/pellets_faw9ms.jpg`,text:"Iron ore pellets in the 5 mm to 16 mm range, used as raw material for blast furnaces and sponge iron production."},
 {title:"Coal Washery",image:`${cloud}/v1741189246/coal-washery_mx78kl.jpg`,text:"Coal upgrading facilities that remove non-combustible impurities and produce marketable coal for target customers."},
 {title:"Power Plant",image:`${cloud}/v1741189250/power-plant2_coyqbc.jpg`,text:"Coal-fired captive power plants producing reliable and cost-effective electricity for industrial operations."},
 {title:"Iron Crusher",image:`${cloud}/v1741189248/iron-crusher_bsuopt.jpg`,text:"Primary, secondary and tertiary crushing systems with vibratory screens and conveyors for iron ore processing."}
];
export const leaders = [
 {name:"Shri Nimish Gadodia",role:"Group Mentor - Navdurga Group",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"Under his outstanding leadership and business acumen, Navdurga Group has grown into a strong and profitable enterprise with a dominant steel presence across India."},
 {name:"Sandeep Agrawal",role:"Business Head - NDFPL",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A postgraduate in Economics with 35 years of business experience, associated with the group for 25 years and responsible for Chhattisgarh operations."},
 {name:"Mohit Agrawal",role:"Partner, Rourkela Sponge LLP",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"An MBA in Finance and Marketing with 18+ years of experience, now leading manufacturing and operations at Rourkela Sponge LLP."},
 {name:"Sanchit Agrawal",role:"Plant Head - Rayalseema Industries India Pvt Ltd",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A mechanical graduate from Manipal and MBA from IBS Hyderabad with expertise in plant operations and commercial management."},
 {name:"Chiranjib Das",role:"Technical Consultant",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A formidable leader with 20 years of corporate experience across multiple fields."},
 {name:"Rahul Bawri",role:"Director Rayalseema",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A commerce graduate responsible for total logistics solutions at Scan Energy & Power Limited."},
 {name:"Arun Dadhichi",role:"Consultant",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"Leads corporate finance and accounting functions and brings 27 years of corporate experience."},
 {name:"Vikash Bhardwaj",role:"Head Sales & Marketing - NDFPL",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"Leads sales, marketing and statutory compliance management with over 14 years of experience."},
 {name:"Dinesh Kumar",role:"Group Executive Director - Finance",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"An ex-banker with 36 years of experience in Allahabad Bank and deep financial leadership expertise."},
 {name:"Deepak Sharma",role:"Director - Navdurga Fuels Pvt Ltd",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"Responsible for plant automation and cost optimisation through creative problem solving."},
 {name:"Kapoor Chanda Kewat",role:"Plant Head - Operation",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A science graduate with 20 years of manufacturing experience leading quality assurance and raw material functions."},
 {name:"Ajay Prasad",role:"Director - Scan Steels Ltd",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A commerce graduate with 20 years of experience in the steel business, based in Ballary, Karnataka."},
 {name:"Sunil Singh",role:"GM - Finance & Accounts",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A finance, marketing and logistics professional with two decades of experience."},
 {name:"Gangadhar Rao",role:"General Manager - Accounts",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A B.Com and MBA professional with strong planning, accounting and decision-making skills."},
 {name:"Hanumanta Mallecheruvu",role:"Manager - Finance",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A science graduate and Certified Associate of IIB with 35 years of banking experience."},
 {name:"Ranjit Kumar",role:"Manager - Accounts",image:`${cloud}/v1741281716/nimish-02_gpekrv.png`,bio:"A CA Inter and B.Com professional with over 25 years of steel-sector accounting experience."},
 {name:"Mr. Manish Agarwal",role:"Manager - Account",image:`${cloud}/v1784770897/Mr_Agarwal_499x499_j8mxdg.jpg`,bio:"With a Commerce background, Mr. Agarwal has successfully led businesses across steel re-rolling, automobile dealerships, and base metal trading. He is responsible for the development and execution of new projects, business strategy, operations, licensing and regulatory compliance, procurement, and team leadership, consistently driving sustainable growth and operational excellence."}
];
export const clientLogos = [
 `${cloud}/v1741189378/1_lvtlad.png`,`${cloud}/v1741189380/2_rqlvsk.png`,`${cloud}/v1741189381/3_at0ji5.png`,`${cloud}/v1741189382/4_lbhqns.png`,`${cloud}/v1741189383/5_xgtzvc.png`,`${cloud}/v1741189385/6_attsbg.png`,`${cloud}/v1741189386/7_wkhvgh.png`,`${cloud}/v1741189387/8_h8sich.png`,`${cloud}/v1741189389/9_mvcqi6.png`,`${cloud}/v1741189390/10_nip4lr.png`
];


export type GalleryMedia = {
  type: "image" | "video";
  src: string;
  thumbnail: string;
  alt: string;
};

export type GalleryGroup = {
  title: string;
  subtitle?: string;
  description: string;
  media: GalleryMedia[];
};

export const galleryHero = {
  title: "Gallery",
  quote:
    "Corporate Social Responsibility is the ethical compass guiding businesses to contribute positively to society, beyond profit-making goals.",
  backgroundImage:
    "https://res.cloudinary.com/dknrenrn0/image/upload/v1786200433/gallery2_ib8hwf.png",
};

export const galleryGroups: GalleryGroup[] = [
  {
    "title": "Independence Day Celebration Across Navdurga Group",
    "subtitle": "Celebrating the Spirit of Freedom, Unity & Nation Building",
    "description": "Various units of the Nav Durga Group came together to celebrate Independence Day with pride and patriotism, hoisting the National Flag in all its pomp and glory. As we celebrated the spirit of a free and vibrant India, we reaffirmed our commitment to contributing to the nation’s growth and progress—continuing to be a part of India’s Nirmaan.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054016/WhatsApp_Image_2026-08-17_at_17.16.27_ndt2zh.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054016/WhatsApp_Image_2026-08-17_at_17.16.27_ndt2zh.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054016/WhatsApp_Image_2026-08-17_at_17.10.36_zvc50q.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054016/WhatsApp_Image_2026-08-17_at_17.10.36_zvc50q.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.35_1_inegwf.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.35_1_inegwf.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.33_1_c35bq4.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.33_1_c35bq4.jpg",
        "alt": "Independence Day"
      },
       {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.34_ebpdna.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_17.10.34_ebpdna.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_18.19.21_vrvmgy.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054017/WhatsApp_Image_2026-08-17_at_18.19.21_vrvmgy.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.33_rqj1wr.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.33_rqj1wr.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.34_2_tz2686.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.34_2_tz2686.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.34_1_xodgpt.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.34_1_xodgpt.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.35_sej08x.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787054018/WhatsApp_Image_2026-08-17_at_17.10.35_sej08x.jpg",
        "alt": "Independence Day"
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1787054240/WhatsApp_Video_Compressed_Quality_Maintained_p94il5.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1787067586/Independence_Day_Video_Thumbnail_1280x1280_hrwzjn.jpg",
        "alt": "Independence Day"
      }
    ]
  },
  {
    "title": "Navdurga Group – Tanzania Manufacturing Unit",
    "subtitle": "Bhoomi Pujan & Production Commencement",
    "description": "Navdurga Group proudly marked the Bhoomi Pujan ceremony for its flagship manufacturing facility in Tanzania . Following this milestone, the unit has officially commenced the production of Nails, Umbrella Nails, and Chicken Mesh , marking a significant step in the Group's global manufacturing expansion.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.25_wdmjvz.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.25_wdmjvz.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.26_fndpoh.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.26_fndpoh.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.25_2_ugi4bc.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733123/WhatsApp_Image_2026-07-22_at_19.01.25_2_ugi4bc.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733122/WhatsApp_Image_2026-07-22_at_19.01.25_1_cabmtu.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733122/WhatsApp_Image_2026-07-22_at_19.01.25_1_cabmtu.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1784733158/WhatsApp_Video_2026-07-22_at_19.01.26_umudmr.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784733991/thumbnail_498x498_sazg0p.jpg",
        "alt": "Video Thumbnail"
      }
    ]
  },
  {
    "title": "Zonal Railway Users Consultative Committee Meeting",
    "subtitle": "106th Meeting - South Eastern Railway",
    "description": "Shri Nimish Gadodia attending the 106th meeting of the Zonal Railway Users Consultative Committee for the South Eastern Railway held on 17th June 2026 .",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224092/1600x900_IMAGEGK4_caelxt.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224092/1600x900_IMAGEGK4_caelxt.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK2_bcskqc.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK2_bcskqc.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK3_kfkbr1.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK3_kfkbr1.jpg",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK1_epuoc1.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784224091/1600x900_IMAGEGK1_epuoc1.jpg",
        "alt": "World Environment Day"
      }
    ]
  },
  {
    "title": "World Environment Day 2026",
    "subtitle": "\"Ek Ped Maa Ke Naam\"",
    "description": "A collective plantation drive where 100 saplings were planted, nurturing a greener future and honoring Mother Nature.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755997/world_env_day-11_umch05.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755997/world_env_day-11_umch05.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755997/world_env_day-4_mmwwa9.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755997/world_env_day-4_mmwwa9.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-10_ukw8p3.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-10_ukw8p3.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-9_gaapam.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-9_gaapam.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-3_ismcem.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755995/world_env_day-3_ismcem.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755994/world_env_day-8_mlvrso.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755994/world_env_day-8_mlvrso.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755993/world_env_day-7_odqshv.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755993/world_env_day-7_odqshv.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755992/world_env_day-5_b9fgei.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755992/world_env_day-5_b9fgei.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755991/world_env_day-1_j8fvqn.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755991/world_env_day-1_j8fvqn.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755990/world_env_day-6_ynhzie.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755990/world_env_day-6_ynhzie.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755990/world_env_day-2_n4sq3g.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755990/world_env_day-2_n4sq3g.webp",
        "alt": "World Environment Day"
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1780756047/world_env_day-12_gcfwes.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1780755997/world_env_day-11_umch05.webp",
        "alt": "Video Thumbnail"
      }
    ]
  },
  {
    "title": "Pandit Deendayal Upadhyaya Prashikshana Maha Abhiyan",
    "subtitle": "",
    "description": "The two-day Pandit Deendayal Upadhyaya Prashikshana Maha Abhiyan was successfully organized at AIPH University, Bhubaneswar. During the occasion, the newly established National Flag Hoisting Structure was also inaugurated within the university premises. The prestigious event was graced by the presence of the Hon’ble Chief Minister of Odisha, Mohan Charan Majhi, along with BJP National president- Shri Nitin Nabin, Manmohan Samal President of BJP Odisha and Our Chairman Shri Dasari Murali Krishna. The program marked a significant moment for the university, reflecting the spirit of patriotism, leadership, and national development.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891225/WhatsApp_Image_2026-05-25_at_14.15.08_1_aljzwk.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891225/WhatsApp_Image_2026-05-25_at_14.15.08_1_aljzwk.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.08_j0ozpe.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.08_j0ozpe.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.06_hwm7l9.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.06_hwm7l9.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.07_trfftt.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1779891221/WhatsApp_Image_2026-05-25_at_14.15.07_trfftt.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Divine Serenity Bhoomi Puja",
    "subtitle": "",
    "description": "In the presence of the architects, contractors, consultants and land owners and distinguished partners divine serenity bhoomi puja was conducted adding one yet another feather to the cap of Nav Durga's real estate journey.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777104692/bhoomi1_ag3ckl.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777104692/bhoomi1_ag3ckl.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777104692/bhumi2_pbui8x.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777104692/bhumi2_pbui8x.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777105277/bhoomi5_zhmvcl.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777105277/bhoomi5_zhmvcl.webp",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777105397/bhumi6_zhf9di.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777105397/bhumi6_zhf9di.webp",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1777103067/WhatsApp_Video_2026-04-22_at_11.12.53_ziqx1l.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1777105108/square-image_ng6ssv.webp",
        "alt": ""
      }
    ]
  },
  {
    "title": "Fortune India – Future-Forward Leaders",
    "subtitle": "",
    "description": "Our Honourable Chairman was featured in the FORTUNE INDIA - \"FUTURE-FORWARD LEADERS\" FEATURE ALONG WITH FORTUNE INDIA FEB 2026 ISSUE.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-1_page-0001_rud414.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-1_page-0001_rud414.jpg",
        "alt": "Fortune India Feb 2026 - Cover Page"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-2_page-0001_f7dc3e.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-2_page-0001_f7dc3e.jpg",
        "alt": "Fortune India - Future Forward Leaders Collage"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-4_page-0001_szfbek.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773467572/PDF_10Feb26_0726_splitted-4_page-0001_szfbek.jpg",
        "alt": "Fortune India - Nimish Gadodia Feature Article"
      }
    ]
  },
  {
    "title": "ICWAI Cricket Match Sponsorship",
    "subtitle": "",
    "description": "Nav Durga Group partnered with OMC to sponsor the ICWAI cricket match at Barabati Stadium.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465088/DSC_1101.JPG_wwplg3.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465088/DSC_1101.JPG_wwplg3.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465087/DSC_1144.JPG_hu5alt.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465087/DSC_1144.JPG_hu5alt.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465086/DSC_1084.JPG_laf0mm.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465086/DSC_1084.JPG_laf0mm.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465084/DSC_1102.JPG_mqrgm1.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1773465084/DSC_1102.JPG_mqrgm1.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Chairman’s Birthday Blood Donation Camps",
    "subtitle": "",
    "description": "In honor of the birthday of our visionary Chairman, Shri Nimish Gadodia, we proudly organized a series of blood donation camps across our industries, uniting efforts to make a meaningful impact and serve the greater good of society.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/5_qhi4s3.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/5_qhi4s3.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/7_oicky4.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/7_oicky4.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187307/10_szz0xy.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187307/10_szz0xy.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187306/9_srzuqm.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187306/9_srzuqm.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187299/1_us6pwv.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187299/1_us6pwv.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/6_fp8sw5.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/6_fp8sw5.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187305/8_qkjyce.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187305/8_qkjyce.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/2_zvjfiy.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/2_zvjfiy.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/3_xpv7xz.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/3_xpv7xz.png",
        "alt": ""
      }
    ]
  },
  {
    "title": "Outlook Business Spotlight Entity Awards 2024",
    "subtitle": "",
    "description": "Scan energy and power limited was recognized as one of the top innovators and leaders in the outlook business spotlight Entity Awards 2024. Our CEO Mr Chiranjib Das represented on behalf of the company and graced the occasion.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187332/dpb5_v8iz0o.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187332/dpb5_v8iz0o.webp",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187373/video3_q6xqbm.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187334/dpb6_ci9etr.png",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187501/video4_d39khc.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187336/dpb7_cuinbx.png",
        "alt": ""
      }
    ]
  },
  {
    "title": "Business Today – Inspiring Indian Leaders",
    "subtitle": "",
    "description": "We are delighted to announce that Business Today Magazine's November 10th, 2024 issue features our esteemed Chairman, Mr. Nimish Gadodia, in its prestigious 'Inspiring Indian Leaders' segment. This coverage showcases the Nav Durga Group's diverse portfolio and highlights Mr. Gadodia's remarkable achievements.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/article_90_1_trcr6q.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/article_90_1_trcr6q.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Durga Puja Community Meal Programme",
    "subtitle": "",
    "description": "Through its Urban Developers and Builders arm, the Nav Durga Group took part in distributing free meals to underprivileged children at Madhurmayee Adarsh Sikshya Niketan in Bhubaneswar, celebrating the auspicious occasion of Durga Puja 2024. The team also joined the children in joyful song and dance activities, creating a day filled with fun and togetherness.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187331/dp2_lsn3iw.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187331/dp2_lsn3iw.webp",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187332/dp3_h0wk7k.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187332/dp3_h0wk7k.webp",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/dp4_lesfrw.webp",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/dp4_lesfrw.webp",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187382/video1_kpgloo.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187332/dp3_h0wk7k.webp",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187385/video2_exqtoy.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187331/dp2_lsn3iw.webp",
        "alt": ""
      }
    ]
  },
  {
    "title": "Outlook Business Magazine Leadership Feature",
    "subtitle": "",
    "description": "Nimish Gadodia: Visionary Leadership and Strategic Brilliance Powering Nav Durga Group’s Path to Excellence, Featured in Outlook Business Magazine",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187353/olb-1_hpqp4o.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187353/olb-1_hpqp4o.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187354/olb-3_f9glc1.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187354/olb-3_f9glc1.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187354/olb-2_1_j9cut2.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187354/olb-2_1_j9cut2.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Nav Durga Group Green Drive",
    "subtitle": "",
    "description": "As part of its environmental responsibility initiatives, Nav Durga Group, under Shri Nimish Gadodia's visionary guidance, launched a green drive, planting over 1000 trees across each of its units/locations facilities, contributing to a sustainable future. Building on this momentum, we aim to plant 1 lakh (100,000) additional trees in the upcoming year.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/ggp1_xins34.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/ggp1_xins34.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/ggp2_rz56w4.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187342/ggp2_rz56w4.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187343/ggp3_sp8ogd.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187343/ggp3_sp8ogd.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187345/ggp4_njulxp.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187345/ggp4_njulxp.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187344/ggp5_yvh1zy.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187344/ggp5_yvh1zy.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187346/ggp6_ffp9zb.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187346/ggp6_ffp9zb.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187346/ggp7_ghlcqh.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187346/ggp7_ghlcqh.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187348/ggp8_ljxgic.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187348/ggp8_ljxgic.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187348/ggp9_zfoyhu.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187348/ggp9_zfoyhu.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187350/ggp10_frd5ev.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187350/ggp10_frd5ev.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "78th Independence Day Celebration",
    "subtitle": "",
    "description": "The Nav Durga Group marked India's 78th Independence Day with great enthusiasm and grandeur, reveling in a sense of national pride.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/1_zrscs7.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/1_zrscs7.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/2_1_zmsbpy.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187301/2_1_zmsbpy.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/4_butbgv.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/4_butbgv.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/5_jtt2ze.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187302/5_jtt2ze.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187304/6_wuel4y.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187304/6_wuel4y.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187307/7_qdij2s.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187307/7_qdij2s.png",
        "alt": ""
      }
    ]
  },
  {
    "title": "Outlook Business Spotlight Realty Awards 2024",
    "subtitle": "",
    "description": "The Outlook Business Spotlight Realty Awards 2024, sponsored by the Nav Durga Group, honored the crème de la crème of India's real estate sector. Our esteemed Group Mentor, Shri Nimish Gadodia, graced the occasion and presented awards to the deserving winners, recognizing their outstanding achievements in the industry.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra1_oa9tyv.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra1_oa9tyv.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187357/ra2_sqdnsm.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187357/ra2_sqdnsm.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra3_hhrbiw.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra3_hhrbiw.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra4_xqerge.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187359/ra4_xqerge.jpg",
        "alt": ""
      },
      {
        "type": "video",
        "src": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187354/gallery-new_f2hadk.mp4",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/video/upload/v1741187354/gallery-new_f2hadk.mp4",
        "alt": ""
      }
    ]
  },
  {
    "title": "ICC Job Mela – Bhubaneswar",
    "subtitle": "",
    "description": "The Nav Durga Group participated in the ICC Job Mela Event at Bhubaneswar to determine and provide hiring opportunities to the many talents that participated in the event.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187324/csr9_v4iuas.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187324/csr9_v4iuas.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187326/csr10_mhngwv.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187326/csr10_mhngwv.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187327/csr11_mctzm2.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187327/csr11_mctzm2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187330/csr12_li4ap7.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187330/csr12_li4ap7.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187328/csr13_vhh47w.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187328/csr13_vhh47w.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187330/csr14_kvh3ui.png",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187330/csr14_kvh3ui.png",
        "alt": ""
      }
    ]
  },
  {
    "title": "CSR Initiatives 2023",
    "subtitle": "CSR",
    "description": "The Navdurga Group has undertaken two major social activities in the year 2023, it has initiated a free meal programme in the town of Rajgangpur Odisha where it serves fresh cooked meals to anyone in need of food, free of cost. And we have undertaken sapling plantation drive where we have planted more than 2000 saplings for a greener future.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187318/csr1_sjvhgo.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187318/csr1_sjvhgo.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187319/csr2_u9z1rx.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187319/csr2_u9z1rx.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187319/csr3_jh5dn7.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187319/csr3_jh5dn7.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187321/csr4_d4nyg5.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187321/csr4_d4nyg5.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187321/csr5_l8nezj.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187321/csr5_l8nezj.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187322/csr6_cizoll.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187322/csr6_cizoll.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187323/csr7_wtf4vw.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187323/csr7_wtf4vw.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187324/csr8_ftmvst.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187324/csr8_ftmvst.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Major Group Events",
    "subtitle": "Events",
    "description": "The Navdurga Group has achieved two significant milestones this year. We have laid down the foundation stone for our first Ethanol plant coming up in the state of Andhra Pradesh, inaugurated by the Hon'ble Chief Minister Jagan Mohan Reddy. Secondly we have also rolled out an expansive investment programme with the Govt. of Tanzania to set up steel plants, mining and commercial banks in the near future.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187336/event3_k5broi.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187336/event3_k5broi.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187337/event4_snwmre.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187337/event4_snwmre.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187339/event5_crcou9.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187339/event5_crcou9.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187335/event1_cwv5ul.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187335/event1_cwv5ul.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187336/event2_pridpg.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187336/event2_pridpg.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Group Mentor Birthday Blood Donation Drive",
    "subtitle": "",
    "description": "Blood donation drive undertaken on the occasion of the group mentor's birthday across all units.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187312/bge3_iu24pw.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187312/bge3_iu24pw.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187311/bge4_pvhbqs.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187311/bge4_pvhbqs.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187313/bge8_yfp3d4.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187313/bge8_yfp3d4.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187310/bge2_yvijk1.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187310/bge2_yvijk1.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187316/bge12_hv8frl.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187316/bge12_hv8frl.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187315/bge13_w1tqvq.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187315/bge13_w1tqvq.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187316/bge14_jgffdj.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187316/bge14_jgffdj.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/bge1_gtys5o.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187308/bge1_gtys5o.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187312/bge7_munamc.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187312/bge7_munamc.jpg",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187314/bge11_qxhrl5.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187314/bge11_qxhrl5.jpg",
        "alt": ""
      }
    ]
  },
  {
    "title": "Underprivileged Children Aircraft Experience",
    "subtitle": "",
    "description": "Under privileged children were given a complete day of indulgence with a ride in a real life air craft along with food and a shopping experience.",
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187340/food_shoping_he1gce.jpg",
        "thumbnail": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741187340/food_shoping_he1gce.jpg",
        "alt": ""
      }
    ]
  }
];
export const overseasAssets = {
 video:"https://res.cloudinary.com/dknrenrn0/video/upload/v1782650609/WhatsApp_Video_2026-06-27_at_17.06.46_pivpta.mp4",
 brochure:"https://navdurgagroup.in/pdf/Divine-Serenity-Brochure.pdf",
 floorPlan:"https://navdurgagroup.in/pdf/Floor-Plan-E-Brochure-Final.pdf"
};



export const homePageContent = {
  heroSlides: [
    {
      title: "STEEL BUSINESS",
      text: "We manufacture quality steel products.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281719/steel_xzebte.png",
      href: "/business/steel",
    },
    {
      title: "ETHANOL BUSINESS",
      text: "Five Projects with the capacity of 1000KLD are under construction in Odisha, A.P, Karnataka & Chhatisgarh.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281715/ethanol_c22fqg.png",
      href: "/business/ethanol",
    },
    {
      title: "TEA BUSINESS",
      text: "We have acquired a tea estate to be part of India's growing beverage market.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281719/teagarden_st6mi5.jpg",
      href: "/business/tea-gardens",
    },
    {
      title: "AVIATION BUSINESS",
      text: "We forayed into the luxury air taxi and chartered air business to have a footprint in the growing aviation industry.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281715/aviation_gm5ftf.jpg",
      href: "/business/aviation",
    },
    {
      title: "RESORT BUSINESS",
      text: "We have strategic partnership with a most reputed Resort Brand in India.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281720/resorts_kpmhxc.png",
      href: "/business/resorts",
    },
    {
      title: "LUXURY HOUSING BUSINESS",
      text: "We are coming up with luxurious and delightful living spaces at Bhubaneswar & Rourkela.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281717/realestate_igsp11.jpg",
      href: "/business/real-estate",
    },
    {
      title: "MINING BUSINESS",
      text: "We have entered into a strategic partnership with a mining giant to mine coal to meet energy production needs.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281719/mining_lxn15n.png",
      href: "/business/mining",
    },
    {
      title: "LOGISTICS BUSINESS",
      text: "We have entered into a strategic partnership for creating infrastructure for transportation of bulk minerals.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281718/logistics2_xlzge3.jpg",
      href: "/business/logistics",
    },
    {
      title: "EDUCATION BUSINESS",
      text: "Education is a transformative journey that not only imparts information but cultivates critical thinking, creativity, and a lifelong love for learning.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281715/education2_imhbz2.jpg",
      href: "/business/education",
    },
  ],
  introVideo: {
    title: "Introductory Video",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741282061/1_qxaimr.jpg",
    video: "https://res.cloudinary.com/dknrenrn0/video/upload/v1759290702/navdurga-brand-video-web_ebtfn5.mp4",
  },
  about: {
    title: "Nav Durga Group",
    text: "Navdurga group is an industrial powerhouse with a dominant presence in steel and upcoming business in Ethanol, Tea Gardens, Resorts, Realty, Logistics, Mining and Education. Led by Shri Nimish Gadodia the company’s inspiring success story is rooted essentially in his resolve to innovate, setting new standards enhancing capabilities and enriching lives. We ensure that it stays true to this principle & value system of benefiting communities.",
    image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1786199301/final1_x2rnul.png",
    href: "/about",
  },
  seplAnnouncement: {
    title: "Exciting News from Scan Energy & Power Limited!",
    paragraphs: [
      "Scan Energy & Power Limited (SEPL) is proud to announce that it has been awarded a significant conversion contract by Rashtriya Ispat Nigam Limited (RINL – Vizag Steel Plant). Under this agreement, SEPL will convert 2.4 lakh metric tons of steel blooms (150×150 mm) into TMT rebars of various sizes (8mm–32mm) at its Hyderabad facility over the contract period.",
      "This prestigious milestone strengthens SEPL’s position as a trusted partner in India’s steel supply chain. This opportunity will enhance SEPL’s industry presence, reinforce its credibility, and open avenues for future strategic collaborations.",
      "Receiving this conversion contract from Rashtriya Ispat Nigam Limited is a landmark accomplishment for Scan Energy & Power Limited (SEPL). Partnering with a Navratna PSU of such national repute not only validates SEPL’s technical competence and operational excellence but also positions the company as a trusted partner. From an operational perspective, the contract will significantly enhance throughput at SEPL’s Hyderabad rolling mill, ensuring smoother workflows, higher efficiency, and consistent product delivery standards. It will also ensure better capacity utilization of SEPL’s facilities, which is expected to improve profitability.",
    ],
  },
  philosophy: {
    title: "Our Philosophy",
    text: "Our philosophy is to strive for the highest quality of product manufacturing while maintaining ethical business practices and to prioritize sustainability by reducing environmental impact and fostering innovation in the industry.",
    missionIntro: "We stride on challenges to aspire achievements & excellence through :",
    mission: [
      "Innovation",
      "Resource convergence & optimisation",
      "Ethically driven business standards",
      "People development through participation & loyalty programs",
      "Maximisation of returns to stakeholders",
      "Impacting communities by meaningful positive association",
      "Adoption of environmentally sustainable practices",
    ],
    vision: "Empowering a World of Possibilities, Together: Our vision is to be a globally recognized leader in diverse industries, driving innovation, sustainability, and prosperity. We are committed to creating value for our stakeholders, fostering growth, and improving lives through our unwavering dedication to excellence, integrity, and social responsibility. We aim to continue expanding our portfolio, pushing the boundaries of what's possible, and leaving a lasting, positive impact on the world.",
  },
  leaders: [
    {
      eyebrow: "Founder Chairman, Navdurga Group.",
      name: "Shri Sawarmal Gadodia",
      text: "Shri Sawarmal Gadodia lives his life with the belief that meaningful change in society requires compassion and hard work from the ground up. By uplifting the weaker sections of society, he believes that our country could progress & attain real development with genuine commitments. Almost half a century ago, he dreamt of transformation of communities through participation in process of socio-economic development.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281719/swar2_pawzyb.jpg",
    },
    {
      eyebrow: "Group Mentor, Navdurga Group",
      name: "Shri Nimish Gadodia",
      text: "Sri Nimish Gadodia comes from an outstanding lineage of home-grown Industrialists and a hugely respected business house from the state of Odisha. An MBA Graduate from the prestigious Symbiosis Institute of Business Management Pune. He has spent the formative years of his life developing deep analytical policies and frameworks which led to creating a benchmark on which the Nav Durga Group operates. Under his outstanding leadership and business acumen, Navdurga Group has grown into a strong and profitable enterprise.",
      text2: "He has transformed Navdurga Group into a powerful industrial house with a dominant presence in the steel sector across 6 states in India. With units situated at Odisha, Telangana, Chhattisgarh and Karnataka to name a few. Apart from steel, Nav Durga has also forayed into the Real Estate, Resorts, Tea and Aviation business verticals where it is continuously driving innovation and growth.",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281716/nimish-02_gpekrv.png",
    },
  ],
  officialAnnouncement: {
    badge: "Milestone Achievements",
    title: "Official Announcement",
    intro: "Nav Durga is proud to announce that Shri Nimish Gadodia has been appointed as the :",
    appointments: [
      {
        title: "OFFICIAL REPRESENTATIVE",
        main: "Shri Jual Oram",
        detail: "Hon'ble Minister of Tribal Affairs, for SAIL RSP",
      },
      {
        title: "MEMBER OF ZURCC",
        main: "SOUTH EASTERN RAILWAY",
        detail: "Zonal Railway User's Consultative Committee",
      },
    ],
    note: "These prestigious appointments reflect our group's commitment to national growth and industrial excellence.",
  },
  facts: [
    {
      value: "30",
      label: "Years Experience",
      icon: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281714/experience_txb7rp.svg",
    },
    {
      value: "10",
      label: "Industries Served",
      icon: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281716/industrie_bfmklr.svg",
    },
    {
      value: "13",
      label: "Factories Built",
      icon: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741281714/factory_oxlcaa.svg",
    },
  ],
} as const;

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const teamPageContent = {
  hero: {
    title: "Our Team",
    eyebrow: "People behind the progress",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1786262575/temnew_mqcll5.png",
    breadcrumb: ["Home", "Team Members"],
  },
  motto: {
    title: "Team Motto",
    text: "Navdurga’s accomplishments today stand on the proud shoulders of its dedicated and committed team which remain to be its most valuable asset. Our goal is to focus our efforts in building a system which is holistic as well as motivating to create,grow and nurture talent so as to enable them to contribute towards the success story of the company; today and in the future .",
  },
  section: {
    eyebrow: "Leadership",
    title: "Experience, integrity and shared ambition.",
    description:
      "Meet the leaders whose experience, expertise and commitment continue to shape Navdurga Group.",
  },
  members: [
  {
    "id": 1,
    "name": "Shri Nimish Gadodia",
    "role": "Group Mentor - Navdurga Group",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189054/nimi_gadodia_team1_u69erm.png",
    "bio": "Under his outstanding leadership and business acumen, Navdurga Group has grown into a strong and profitable enterprise. He has transformed Navdurga Group into a powerful industrial house with a dominant presence in steel across India. The group is continuously scaling its capacity through new projects, acquisition of brownfield assets and diversification to build sustainable businesses."
  },
  // {
  //   "id": 2,
  //   "name": "Sandeep Agrawal",
  //   "role": "Business Head - NDFPL",
  //   "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189059/sandip_obzvbh.jpg",
  //   "bio": "Post graduate in Economics, having 35 years of experiences in running various business. He has been associated with this group for last 25 years.He looks after Chhatisgarh operations."
  // },
  // {
  //   "id": 3,
  //   "name": "Mohit Agrawal",
  //   "role": "Partner, Rourkela Sponge LLP",
  //   "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1751786827/DSC01528_1_kktwgj.jpg",
  //   "bio": "He holds an MBA in Finance and Marketing from ICFAI and a graduation degree from Symbiosis College, Pune With a strong analytical background in Equities and Commodities, he brings 18+ years of experience and entrepreneurial expertise in FMCG retail. He now leads manufacturing and operations at Rourkela Sponge LLP, driving the company's future growth."
  // },
  // {
  //   "id": 4,
  //   "name": "Sanchit Agrawal",
  //   "role": "Plant Head - Rayalseema Industries India Pvt Ltd",
  //   "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189057/sanchil-agrawal_nodxbd.png",
  //   "bio": "Mechanical Grad from Manipal and MBA from IBS -Hyderbad. He is looking after RIIPL plant. He has expertise in plant operation and posseses high level commerical accumen."
  // },
  {
    "id": 5,
    "name": "Chiranjib Das",
    "role": "Technical Consultant",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189046/chiranjib-das_nhaz8x.png",
    "bio": "He is a formidable leader, who evokes dramatic business results. Having 20 years of myriad ventured corporate experiences in various fields."
  },
  {
    "id": 6,
    "name": "Rahul Bawri",
    "role": "Director Rayalseema",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189056/rahul-bawri_zkqu4l.png",
    "bio": "A Commerce graduate, has been associated with the group since last 6 years, looking after Scan Energy & Power Ltd. Mr Bawri manages the total logistics solution of SEPL."
  },
  {
    "id": 7,
    "name": "Arun Dadhichi",
    "role": "Consultant",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189045/arun-dadhichi_jno9oa.png",
    "bio": "He is leading and driving corporate finance and accounting functions. He carries 27 years of experience in corporate functions, He also leads all plants F&A team."
  },
  {
    "id": 8,
    "name": "Vikash Bhardwaj",
    "role": "Head Sales & Marketing - NDFPL",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189061/vikash_y9dwqx.jpg",
    "bio": "He spearheads the Sales and Marketing functions & the Group's statutory compliances management systems. With over 14 years of vast experience in sales & Marketing."
  },
  {
    "id": 9,
    "name": "Dinesh Kumar",
    "role": "Group Executive Director - Finance",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189047/dinesh-kumar_jmg7r9.png",
    "bio": "Associated with this group since last two years. He is an ex- Banker with an experience of 36 years with Allahabad Bank."
  },
  {
    "id": 10,
    "name": "Deepak Sharma",
    "role": "Director - Navdurga Fuels Pvt Ltd",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189045/deepaksharma2_a3hxpm.png",
    "bio": "He is responsible for implementing plant automation for cost optimisation. He possesses radical thinkings and out of box solutions under his sleeves . His creative problem solving disposition has proved to be invaluable."
  },
  {
    "id": 11,
    "name": "Dr. Avinash Unnithan",
    "role": "Group C.E.O.",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784730962/Dr._Avinash_Unnithan_499x499_xbboix.jpg",
    "bio": "Dr. Avinash Unnithan brings over 25 years of experience in conducting business across diverse sectors with notable presence in both domestic and international markets."
  },
  {
    "id": 12,
    "name": "Ajay Prasad",
    "role": "Director - Scan Steel Ltd",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189044/ajay-prasad_c05h6s.png",
    "bio": "Commerce Graduate and having 20 year experiences in Steel Business .Presently based out of Bellary -Karnataka."
  },
  {
    "id": 13,
    "name": "Sunil Singh",
    "role": "GM - Finance & Accounts",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189060/sunil_singh1_swnybl.jpg",
    "bio": "He is a postgraduate in Finance, Marketing, and Logistics Management. A meticulous professional with 20 years of experience, he excels in navigating numbers, crafting connections, shaping success, and providing exceptional service."
  },
  {
    "id": 14,
    "name": "Gangadhar Rao",
    "role": "General Manager - Accounts",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189048/gangadhar_rao1_ujcmym.png",
    "bio": "Mr. Gangadhara Rao, B.Com, MBA, is the General Manager of Accounts for the organization. He is a dynamic individual with excellent acumen, strong planning skills, and the ability to make timely and sound decisions. He is a valuable asset to our organization."
  },
  {
    "id": 15,
    "name": "Hanumanta Mallecheruvu",
    "role": "Manager - Finance",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189049/hanumanta1_nndoby.jpg",
    "bio": "Mr. Hanumanta, a Science graduate and a Certified Associate of lIB. having 35 years of experience as a Bank officer in PSBs. Presently in the Navdurga group for the last 3 years as a Manager (finance)"
  },
  {
    "id": 16,
    "name": "Ranjit Kumar",
    "role": "Manager - Account",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189056/ranjit-kumar_cnpfxu.png",
    "bio": "He is the manager of accounts at Nav Durga Group. He holds a CA Inter qualification from ICAI, New Delhi and a B. Com from Ranchi University. With over 25 years of experience in the steel sector, Mr Kumar brings a wealth of industrial and business accounting expertise to his job profile. His responsibilities include overseeing administration, banking, accounts finalization, audit and taxation."
  },
  {
    "id": 17,
    "name": "Mr. Manish Agarwal",
    "role": "Manager - Account",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1784770897/Mr_Agarwal_499x499_j8mxdg.jpg",
    "bio": "With a Commerce background, Mr. Agarwal has successfully led businesses across steel re-rolling, automobile dealerships, and base metal trading. He is responsible for the development and execution of new projects, business strategy, operations, licensing and regulatory compliance, procurement, and team leadership, consistently driving sustainable growth and operational excellence."
  }
] as TeamMember[],
};


export type AboutCompany = {
  name: string;
  details: string;
};

export type AboutVertical = {
  title: string;
  companies: AboutCompany[];
};

export const aboutPageContent = {
  "hero": {
    "title": "WHO WE ARE",
    "eyebrow": "Legacy • Enterprise • Impact",
    "backgroundImage": "https://res.cloudinary.com/dknrenrn0/image/upload/v1786262326/14939fa5-6140-4851-ae22-73fc715202e6_kz7uon.png",
    "breadcrumb": [
      "Home",
      "About"
    ]
  },
  "introduction": {
    "eyebrow": "Who We Are",
    "title": "An industrial powerhouse built on vision and values.",
    "text": "Navdurga group is an industrial powerhouse with a dominant presence in steel and upcoming business in Ethanol, Tea Gardens, Resorts, Realty, Logistics , Mining and Education. Led by Shri Nimish Gadodia, the company’s inspiring success story is rooted essentially in his resolve to innovate, setting new standards, enhancing capabilities and enriching lives. We ensure that it stays true to this principle & value system of benefiting communities."
  },
  "background": {
    "eyebrow": "Our Journey",
    "title": "Background",
    "text": "The Navdurga group is one of the Eastern & Southern India’s most respected business houses and is founded by Shri Sawarmal Gadodia under whose guidance the group grows from strength to strength. The group started in 1990 with the incorporation of M/s Scan Steels Limited (SSL), the flagship company of the group. SSL commenced its commercial production of Rolling Mill at Ramabahal near Rajgangpur, Distt. Sundergarh, Odisha. SSL was the first to start a DRI unit for manufacturing of sponge iron in the state of Odisha. The group gradually starting from a re-rolling mill over the period through acquisitions and mergers has become an Integrated Steel Producer with units coming in other parts of the country like Chhattisgarh, Karnataka and Andhra Pradesh besides Odisha. Over the years, the group has added new manufacturing facility in Eastern, Central and Southern parts of India. During 2007, the group acquired Nav Durga Fuels Pvt. Ltd. in Raigarh, Chhattisgarh having manufacturing facility of Billets and in short span of two years was able to turnaround the face of the company by achieving profitability. Further in the southern part of India, the Company acquired an existing DRI unit of 200 TPD at Bellary, Karnataka in 2009 under Scan Steels Limited.",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1786258356/About_mhwgej.jpg"
  },
  "map": {
    "eyebrow": "Our Presence",
    "title": "A growing footprint across India.",
    "description": "Explore the locations that represent Navdurga Group’s expanding industrial presence.",
    "embedUrl": "https://www.google.com/maps/d/u/0/embed?mid=10Xhj4Wpt340qyJMYM-iTjV9mVs3phZc&ehbc=2E312F&noprof=1"
  },
  "businessVerticals": {
    "eyebrow": "Portfolio",
    "title": "Navdurga Group's Business Verticals",
    "description": "A diversified portfolio spanning core industries, emerging opportunities and long-term value creation.",
    "items": [
      {
        "title": "IRON & STEEL",
        "companies": [
          {
            "name": "SCAN ENERGY & POWER LTD",
            "details": "Address :Work; Survey No.34 35 & 36 Kondurg (village) Shadnagar, Dist Rangareddy, Telangana 509207. GSTIN NO 36AAMCS1851L1ZX. Installed Capacity: Billet: 500 TPD -TMT: 500 TPD- Wire rod: 500 TPD."
          },
          {
            "name": "RAYALASEEMA INDUTRIES (INDIA) PVT LTD",
            "details": "Address: Sy No:115/2/A/A, Theegapur (V) ,Kothur Mandal,Dist Rangareddy, Telengana 509228. GSTN: 36AACCR8836N1ZP. Installed Capacity : Billet 150 TPD- TMT 150 TPD- Structurals 150 TPD."
          },
          {
            "name": "SCAN STEELS LTD",
            "details": "Address: Survey no. 284/A, 283/B, 400/A1, 285 /B1, Haraginadoni Road,Veniverrapur Village, BALLARY,KARNATAKA- 583115. GST NO. 29AABCM6734H1ZA. Installed Capacity : Sponge Iron 200 TPD."
          },
          {
            "name": "NAVDURGA FUELS PVT LTD",
            "details": "Address: Saraipali,Gharghora Road,Raigarh ,Chhattisgarh -496001. GST:22ABCN9131F1ZU. Installed Capacity: Sponge 300 TPD , Billet-79200 Ton/Annum, TMT -100000 Ton/Annum ,CPP 12 MW, COAL Washeries -50TPH."
          },
          {
            "name": "ROURKELA SPONGE LLP",
            "details": "Address: Balanda ,Kalunga,Dist-Sundergarh, Odisha -770031. GST:21AAWFR7896M1Z2. Installed Capacity : Sponge 200 TPD."
          }
        ]
      },
      {
        "title": "ETHANOL",
        "companies": [
          {
            "name": "Navdurga Fuels Pvt Ltd ( Ethanol Division )",
            "details": "Address : Village – Barpali,Tehsil-Tamnar ,Dist- Raigarh (CG). GST :22ABCN9131F1ZU. Installed Capacity : 100KLD."
          },
          {
            "name": "Rourkela Sponge LLP ( Ethanol Division )",
            "details": "Address : Balanda ,Po - Kalunga ,Dist – Sundergarh (Odisha). GST :21AAWFR7896M1Z2. Installed Capacity :100 KLD."
          },
          {
            "name": "Eco Steel India Ltd ( Ethanol Division)",
            "details": "Address:Jajarvaka lvillage ,D. Hirechal Mandal, Dist – Ananthapuram (AP). GST :37AACCE0189M1ZC. Installed Capacity : 200 KLD."
          },
          {
            "name": "Navdurga Fuel Pvt Ltd –(Rajnandgoan Ethanol Division)",
            "details": "Address : Village –Bhadara Nowagaon,TEH /Dist –Rajnandgaon (CG). GST : 22AABCN9131F2ZT. Installed Capacity : 200 KLD."
          },
          {
            "name": "Navdurga Fuel Pvt Ltd (Shahdol Ethanol Division)",
            "details": "Address :Village –Maiki ,Teh- Sohagpur, Dist- Shahdol (MP). GST : 23AABCN9131F2ZR. Installed Capacity : 200 KLD."
          }
        ]
      },
      {
        "title": "AVIATION",
        "companies": [
          {
            "name": "Navdurga Aviation Pvt Ltd",
            "details": "Address : 51,Pratap Vihar Part -1, Kirari Extension. New Delhi -110086. GST :07AAGCN7680N1ZQ."
          }
        ]
      },
      {
        "title": "TEA ESTATE",
        "companies": [
          {
            "name": "Jute and Stores Limited",
            "details": "Address : Flat No -101,Plot No 846. Ravi Auto Complex 2nd Mile , Sevoke Road ,Siliguri ,Darjeeling ,West Bengal -734002. GST :19AAACJ8544R1ZQ."
          }
        ]
      },
      {
        "title": "RESORTS & URBAN INFRA",
        "companies": [
          {
            "name": "Rourkela Resorts LLP",
            "details": "Address : Near Bajrang Dukan Main road , Rajgangapur ,Sundergarh ,Odisha -770017."
          },
          {
            "name": "Urban Living Developers LLP",
            "details": "Address : Flat No -201,Shree Residency ,Phase -II ,Kanan Vihar ,Patia, Bhubaneswar,Odisha -751024. GST : 21AAHFU1722G1ZM."
          },
          {
            "name": "Urban Living Builders LLP",
            "details": "Address : Flat No - 201 ,2nd Floor ,GDS , Patia, Bhubaneswar ,Odisha -751024."
          }
        ]
      }
    ]
  },
  "associatedCompanies": {
    "eyebrow": "Group Network",
    "title": "Our Associated Companies",
    "description": "A strong ecosystem of associated companies supporting the Group’s scale, reach and operating capabilities.",
    "items": [
      {
        "name": "RAYEN STEELS PRIVATE LIMITED",
        "details": "Address: Survey No. 1115d/e, Haraginadoni Road, Veni Veerapura Village,hospet Road, Bellary, Karnataka."
      },
      {
        "name": "BILASRAIKA SPONGE IRON INDIA PVT LIMITED",
        "details": "Address : Factory Sy No 159-164 Village -Gundla Potla Pally,Rajapur Mandal,Mahboob Nagar, Telangana -509301."
      },
      {
        "name": "SCANIA STEEL & POWER LIMITED",
        "details": "Address: 22 km Stone ,Gharghora Road ,Punji Patra ,Raigarh , Chhattishgarh -496011."
      },
      {
        "name": "RASHI STEEL & POWER LIMITED",
        "details": "Address: Praghat, Jayramnagar ,Tehsil -Masturi, Dist -Bilaspur Chhattisgarh."
      },
      {
        "name": "ARYAN ISPAT & POWER LIMITED",
        "details": "We have recently acquired a trading partnership with Aryan Ispat Power Ltd situated at Lapanga Odisha and have 100% sales rights for the sponge manufactured at the this industry."
      }
    ]
  }
} as const;


export type ProductPageItem = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export const productPageContent = {
  hero: {
    eyebrow: "Engineered for performance",
    title: "PRODUCTS & QUALITY ASSURANCE",
    description:
      "Premium steel products manufactured with precision, consistency and uncompromising quality.",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189251/product_vhzuga.jpg",
    breadcrumb: ["Home", "Product"],
  },
  overview: {
    eyebrow: "Our Products",
    title: "Reliable steel for demanding applications.",
    image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189253/product-img_ejbj2t.png",
    paragraphs: [
  "Navdurga produces high quality TMT, wire rods, billet, structural iron and sponge iron at its various plants spread across in southern, central and eastern India. The TMT rebars are conforming to the latest BIS-1786: 2008 specifications and are available in Fe 500D, Fe 550D & 600 grade in normal.",
  "The group is committed to provide complete customer satisfaction with respect to quality, delivery & services. Feedback from the customers acts as inputs for continuous improvement on products and services."
],
  },
  quality: {
    eyebrow: "Quality at every stage",
    title: "Quality Assurance",
    text: "The company ensures unequivocal quality at every step, from the input of raw materials to the final product delivered on site. With highly automated plants and continuous checks at every level, we are able to produce the best quality rebars in the country. The quality team is equipped with modern testing facilities to ensure that the products meet stringent norms and quality standards.",
    highlights: [
      "Automated manufacturing",
      "Continuous quality checks",
      "Modern testing facilities",
      "Stringent product standards",
    ],
  },
  section: {
    eyebrow: "Product Portfolio",
    title: "Built with strength. Delivered with confidence.",
    description:
      "Explore Navdurga Group’s complete range of steel and industrial products.",
  },
  products: [
  {
    "id": 1,
    "title": "TMT",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189259/tmt_ro3fiv.jpg",
    "description": "Thermo Mechanically Treated Steel or TMT is manufactured through the TEMPCORE process at Nav Durga Plants, the bars range from 8mm to 32mm in thickness and have high bend quality, high temperature resistance and low carbon quality. Our samples undergo rigorous testing in weight, length and dimension as per the guidelines mandated in IS 1786."
  },
  {
    "id": 2,
    "title": "Wire Rod",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189259/wire_mrlmkm.jpg",
    "description": "Production of wire rod is done by rolling billets of required grade with the help of a rolling mill. We hold a standing capacity to produce 180000 TPA of wire rod. We produce this wire rod via the process known as hot rolling. Silicon Killed is the type of the wire rod produced by us using this method"
  },
  {
    "id": 3,
    "title": "Billet",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189246/billet_ik8gih.jpg",
    "description": "Billets are also known as the second-stage product of steel production. They can be produced in two ways namely continuous casting or rolled directly from the casting process by billet mills. Steel billets are very ductile and are produced in square cross-sections. We have a installed capacity of 6MT in two furnaces and 8MT in one furnance. We produce the billet via the continuous casting machine."
  },
  {
    "id": 4,
    "title": "Structural Steel",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189255/structural_gvgfbf.jpg",
    "description": "Structural steel is a steel that contains carbon in not more than 2.1 percentage, they are typically used for making construction materials in variety of shapes. It is designed to have a good strength/weight ratio and is also cost-effective in order to be benefited as a structural component in buildings, roads, bridges, etc. We have a standing capacity to produce 50000 TPA having E250 grade."
  },
  {
    "id": 5,
    "title": "Sponge Iron",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189254/sponge_eghena.jpg",
    "description": "Sponge Iron also known as direct reduced iron is produced from hematite iron ore by removing the oxygen through the direct reduction process, using non-coking coal as the fuel and reducing agent in the rotary kiln. Sponge Iron is rich in metallic iron with consistent chemical & physical characteristics. We have a standing capacity to produce 750000 TPA, through the DRI coal based process."
  },
  {
    "id": 6,
    "title": "Pellets",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189250/pellets_faw9ms.jpg",
    "description": "The iron ore pellets produced by us are spheres typically in the size range of 5mm to 16mm, which are further used by other subsidiaries to make pellet sponge. The chemical composition of our pellet is within the range of 63.5 to 64 Fe. The iron ore pellets are typically used as raw material for blast furnances and sponge making. We undertake Iron Ore Pelletizing or more commonly known as balling, in which we transform fines into spherical granules. We have a standing capacity to produce 0.4 million tons per annum.We also have an iron ore beneficiation plant of 1 million tons capacity per annum. We are set to expand our production in the coming years."
  },
  {
    "id": 7,
    "title": "Coal Washery",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189246/coal-washery_mx78kl.jpg",
    "description": "Coal Washing is a process of upgrading of combustible material in coal by subtraction of non-combustible impurities by applying industrial extractors mainly based on difference in specific gravity of coal and associated impurities like Shale, Sand & Stones amongst others, so that we get marketable coal appropriate for the target customers. We have a standing capacity to wash 100 ton of coal per hour, and is set to expand our footprint in the near future."
  },
  {
    "id": 8,
    "title": "Power Plant",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189250/power-plant2_coyqbc.jpg",
    "description": "A power plant is an industrial facility that generates electricity from energy fuels such as coal,natural gas etc. Most power plants use one or more generators that convert mechanical energy into electrical energy. The power generated in these power plants are not only reliable but also cost-effective over grid power, they reduce dependency on grid power import and increase accessibility for control of power generation. Our coal-fired power plants produce 40 megawatts of energy in total."
  },
  {
    "id": 9,
    "title": "Iron Crusher",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189248/iron-crusher_bsuopt.jpg",
    "description": "Equipment used in iron ore crusher typically includes primary crushers secondary crushers, tertiary crushers, vibratory screens and conveyors. Primary crushers are used to reduce the size of larger pieces, while secondary crushers are designed to break large chunks into smaller pieces Tertiary crushers are used to refine and refine the ore particles further Additionally, vibratory screens are used to separate the various sized particles, and conveyors are used to transport the ore to processing plants."
  }
] as ProductPageItem[],
};


export type OverseasCoreValue = {
  title: string;
  description: string;
  icon: string;
};

export type OverseasTable = {
  title: string;
  rows: string[][];
};

export type OverseasImageCard = {
  title: string;
  subtitle: string;
  image: string;
  downloadUrl?: string;
  videoUrl?: string;
};

export type OverseasFeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export const overseasPageContent = {
  hero: {
    eyebrow: "Divine Steels Limited",
    title: "Overseas Project",
    description:
      "Navdurga Group’s first international industrial venture—building a fully integrated steel future in Tanzania.",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741283646/banner1_pmm4tc.png",
    breadcrumb: ["Business", "Overseas"],
  },
  introVideo: {
    title: "Discover Divine Steels Limited",
    video: "https://res.cloudinary.com/dknrenrn0/video/upload/v1741283490/dsl-video_aupqe6.mp4",
    backgroundImage: "https://navdurgagroup.in/images/background/image-dsl.jpg",
  },
  about: {
    eyebrow: "About the venture",
    title: "About Us",
    image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741283345/ds2_cp0qym.jpg",
    text: "Welcome to Divine Steels Limited, the inaugural global venture of Navdurga Group, a prominent name in India's steel manufacturing industry. We are proud to establish our first international footprint in Tanzania, with an upcoming Fully Integrated Steel Plant (ISP) designed to produce steel via the sponge iron route With an annual production capacity of 360,000 metric tons, this facility underscores our commitment to excellence and innovation in steel manufacturing.",
    capacity: "360,000",
    capacityLabel: "Metric tons annual production capacity",
  },
  visionMission: {
    vision: {
      title: "Our Vision",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1786199301/final1_x2rnul.png",
      text: "Divine Steels Limited is driven by a vision to transform Tanzania's steel industry and contribute significantly to the nation’s infrastructural and economic development. Our mission is to deliver high-quality steel products that meet international standards, supporting industrial growth and development across the region.",
    },
    mission: {
      title: "Our Mission",
      image: "https://res.cloudinary.com/dknrenrn0/image/upload/v1741283345/ds1_dqsuok.jpg",
      text: "Divine Steels Limited is committed to building long-lasting relationships based on trust, integrity, and mutual success. As we embark on this exciting journey we remain steadfast in our commitment to excellence, sustainability, and social responsibility. Join us as we redefine the future of steel manufacturing in Tanzania and contribute to the nation’s progress and prosperity.",
    },
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Leadership and Expertise",
    text: "This venture is a result of the ambitious global expansion vision of Navdurga Group, spearheaded by our esteemed Founder Chairman, Shri. Nimish Gadodia. With over three decades of expertise in steel making, he has successfully positioned Navdurga Group among India's top five producers of secondary steel. His leadership and strategic insights are the cornerstone of our journey toward establishing Divine Steels Limited as a leader in Tanzania’s steel sector. As an industrialist philanthropist, and visionary leader, he brings us a wealth of knowledge and expertise, ensuring that our operations align with the highest international standards providing superior steel products to our clients.",
  },
  coreValuesIntro: "At Divine Steels Limited, our core values underpin everything we do.",
  projectMilestones: {
    eyebrow: "Project Milestones",
    title: "From vision to on-ground transformation.",
    text: "Land acquisition for the plant has been completed, and construction is set to commence shortly. We anticipate the completion of the plant and the commencement of production within the next 18 months. This timeline reflects our dedication to efficient project execution and our commitment to bringing high-quality steel products to the Tanzanian market promptly.",
  },
  commitment: {
    eyebrow: "Commitment to Tanzania",
    title: "Supporting industrial and infrastructural development.",
    text: "Divine Steels Limited is poised to make a significant contribution to Tanzania's industrial and infrastructural development. Our mission is to support the nation’s growth by providing high-quality steel products for critical infrastructure projects, thereby fostering economic development and creating job opportunities. The commissioning of our plant is expected within 18 months, marking the beginning of a new era in Tanzania’s steel industry.",
  },
  socialResponsibility: {
    eyebrow: "Philanthropy and Social Responsibility",
    title: "Progress that strengthens communities.",
    intro: "Our dedication extends beyond the steel industry. As a passionate philanthropist, our Chairman is committed to social work and community development, focusing on:",
    items: [
      {
        title: "Women Empowerment",
        description: "Promoting gender equality and providing women with opportunities to succeed in various fields.",
        icon: "https://navdurgagroup.in/images/product/womens.svg",
      },
      {
        title: "Skill Development",
        description: "Offering training programs to enhance the skills of Tanzanians, preparing them for employment in the steel industry and other sectors.",
        icon: "https://navdurgagroup.in/images/product/skills.svg",
      },
      {
        title: "Community Support",
        description: "Engaging in initiatives that uplift local communities, improve living standards, and create a positive social impact.",
        icon: "https://navdurgagroup.in/images/product/community.svg",
      },
    ] as OverseasFeatureItem[],
  },
  closingStatement: "Divine Steels Limited is committed to building long-lasting relationships based on trust, integrity, and mutual success. As we embark on this exciting journey, we remain steadfast in our commitment to excellence, sustainability, and social responsibility. Join us as we redefine the future of steel manufacturing in Tanzania and contribute to the nation’s progress and prosperity.",
  coreValues: [
  {
    "title": "Quality",
    "description": "We are dedicated to producing steel products that meet the highest quality standards, ensuring durability and reliability.",
    "icon": "https://navdurgagroup.in/images/product/quality.svg"
  },
  {
    "title": "Innovation",
    "description": "We embrace cutting-edge technologies and innovative practices to stay ahead in the industry and meet evolving market demands.",
    "icon": "https://navdurgagroup.in/images/product/innovation.svg"
  },
  {
    "title": "Sustainability",
    "description": "Our commitment to environmental responsibility drives us to implement sustainable manufacturing practices, minimizing our ecological footprint.",
    "icon": "https://navdurgagroup.in/images/product/sustainability.svg"
  },
  {
    "title": "Customer Focus",
    "description": "Our customers are at the heart of our business. We strive to exceed their expectations by consistently delivering high-quality steel products and maintaining exceptional service standards.",
    "icon": "https://navdurgagroup.in/images/product/audience.svg"
  }
] as OverseasCoreValue[],
  projectTables: [] as OverseasTable[],
  imageCards: [
  {
    "title": "Divine Serenity Project Film",
    "subtitle": "Click to Play Video",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1782651588/image-1366x1366_d8zi94.png",
    "videoUrl": "https://res.cloudinary.com/dknrenrn0/video/upload/v1782650609/WhatsApp_Video_2026-06-27_at_17.06.46_pivpta.mp4"
  },
  {
    "title": "Divine Serenity Brochure",
    "subtitle": "Click to Download PDF",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1782653056/image-1366x1366_3_zdkunw.png",
    "downloadUrl": "/assets/pdf/Divine-Serenity-Brochure.pdf"
  },
  {
    "title": "Floor Plan E Brochure",
    "subtitle": "Click to Download PDF",
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1782652849/image-1366x1366_2_am5mrw.png",
    "downloadUrl": "/assets/pdf/Floor-Plan-E-Brochure-Final.pdf"
  }
] as OverseasImageCard[],
  serenity: {
  "title": "Divine Serenity",
  "paragraphs": [
    "Divine Serenity is the flagship project of Nav Durga Group in Tanzania, following is the project details."
  ],
  "images": [
    "https://res.cloudinary.com/dknrenrn0/image/upload/v1782651588/image-1366x1366_d8zi94.png",
    "https://res.cloudinary.com/dknrenrn0/image/upload/v1782653056/image-1366x1366_3_zdkunw.png",
    "https://res.cloudinary.com/dknrenrn0/image/upload/v1782652849/image-1366x1366_2_am5mrw.png"
  ],
  "downloads": [
    {
      "label": "Divine Serenity Brochure Click to Download PDF",
      "url": "/assets/pdf/Divine-Serenity-Brochure.pdf"
    },
    {
      "label": "Floor Plan E Brochure Click to Download PDF",
      "url": "/assets/pdf/Floor-Plan-E-Brochure-Final.pdf"
    }
  ]
},
  downloads: [
  {
    "label": "Divine Serenity Brochure Click to Download PDF",
    "url": "/assets/pdf/Divine-Serenity-Brochure.pdf"
  },
  {
    "label": "Floor Plan E Brochure Click to Download PDF",
    "url": "/assets/pdf/Floor-Plan-E-Brochure-Final.pdf"
  }
],
  contact: {
    eyebrow: "Contact Details",
    title: "Connect with Divine Steels Limited",
    description: "Contact us today to discover how we can support your projects with our superior steel solutions and unwavering commitment to quality and innovation.",
    name: "Divine Steels Limited",
    address: "DIVINE STEELS LIMITED, D WING, 10TH FLOOR, GARDEN AVENUE TOWER, PLOT NO 20 & 21, OHIO STREET, DAR ES SALAAM, TANZANIA.",
    emails: ["info@divinegrouptz.com"],
    phones: ["+(255) 763888820", "+(91) 9987420002"],
  },
};



export type ClientLogo = {
  id: number;
  image: string;
  alt: string;
};

export const clientsPageContent = {
  hero: {
    eyebrow: "Trusted relationships",
    title: "OUR CLIENTS",
    description:
      "Long-standing partnerships built through consistent quality, dependable delivery and responsive service.",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1786199782/client_wnpapu.png",
    breadcrumb: ["Home", "Clients"],
  },
  intro: {
    eyebrow: "Our Clients",
    title: "Confidence earned across industries.",
    description:
      "Navdurga Group is proud to serve a growing network of respected organisations. Every relationship reflects our commitment to quality, reliability and long-term value creation.",
    stats: [
      { value: "10+", label: "Featured client relationships" },
      { value: "30+", label: "Years of industrial experience" },
      { value: "Quality", label: "At the centre of every partnership" },
    ],
  },
  section: {
    eyebrow: "Trusted by industry",
    title: "Partnerships that move business forward.",
    description:
      "A curated showcase of organisations that have placed their trust in Navdurga Group.",
  },
  logos: [
  {
    "id": 1,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189378/1_lvtlad.png",
    "alt": "Navdurga client 1"
  },
  {
    "id": 2,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189380/2_rqlvsk.png",
    "alt": "Navdurga client 2"
  },
  {
    "id": 3,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189381/3_at0ji5.png",
    "alt": "Navdurga client 3"
  },
  {
    "id": 4,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189382/4_lbhqns.png",
    "alt": "Navdurga client 4"
  },
  {
    "id": 5,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189383/5_xgtzvc.png",
    "alt": "Navdurga client 5"
  },
  {
    "id": 6,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189385/6_attsbg.png",
    "alt": "Navdurga client 6"
  },
  {
    "id": 7,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189386/7_wkhvgh.png",
    "alt": "Navdurga client 7"
  },
  {
    "id": 8,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189387/8_h8sich.png",
    "alt": "Navdurga client 8"
  },
  {
    "id": 9,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189389/9_mvcqi6.png",
    "alt": "Navdurga client 9"
  },
  {
    "id": 10,
    "image": "https://res.cloudinary.com/dknrenrn0/image/upload/v1741189390/10_nip4lr.png",
    "alt": "Navdurga client 10"
  }
] as ClientLogo[],
};


export type ContactDetail = {
  title: string;
  value: string;
};

export type ContactFormField = {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export const contactPageContent = {
  hero: {
    eyebrow: "Connect with Navdurga",
    title: "Contact us",
    description:
      "Reach our team for business enquiries, partnerships, careers and general information.",
    backgroundImage: "https://res.cloudinary.com/dknrenrn0/image/upload/v1786199972/contact_zx1q8e.png",
    breadcrumb: ["Home", "Get In Touch"],
  },
  intro: {
    eyebrow: "Get in touch",
    title: "Let’s start a meaningful conversation.",
    description:
      "Whether you are exploring a partnership, seeking product information or looking to connect with our team, we are ready to assist.",
  },
  details: {
    registeredOffice: "HOUSE NO 56/1, MIG - II, PHASE I, CHANDRASEKHARPUR HOUSING BOARD COLONY, CS PUR BHUBANESWAR KHORDHA ODISHA 751016",
    corporateOffice: "H. NO. 8-2-618/2/A TO C, DELTA SEACON BUILDING ROAD NO. 11, BANJARA HILLS HYDERABAD TELANGANA 500034",
    email: "hrd@navdurgagroup.in",
    phone: "+(91) 989-302-1933",
  },
  form: {
    eyebrow: "Send an enquiry",
    title: "Let’s get started.",
    description:
      "Share your details and message. Our team will connect with you as soon as possible.",
    endpoint: "/contact",
    fields: [
  {
    "name": "firstname",
    "type": "text",
    "placeholder": "First Name",
    "required": true
  },
  {
    "name": "lastname",
    "type": "text",
    "placeholder": "Last Name",
    "required": true
  },
  {
    "name": "email",
    "type": "email",
    "placeholder": "Email",
    "required": true
  },
  {
    "name": "phone",
    "type": "text",
    "placeholder": "Phone",
    "required": true
  },
  {
    "name": "website",
    "type": "text",
    "placeholder": "website",
    "required": false
  },
  {
    "name": "message",
    "type": "textarea",
    "placeholder": "Message",
    "required": false
  }
] as ContactFormField[],
    successMessage:
      "Thanks for showing interest. Your enquiry has been submitted successfully.",
    errorMessage:
      "We could not submit your enquiry. Please try again or contact us directly.",
  },
  map: {
    eyebrow: "Our presence",
    title: "Find Navdurga Group.",
    embedUrl: "https://www.google.com/maps/d/u/0/embed?mid=10Xhj4Wpt340qyJMYM-iTjV9mVs3phZc&ehbc=2E312F&noprof=1",
  },
};