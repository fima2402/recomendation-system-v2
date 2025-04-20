function ahp() {
    return {
        "criteria" : {
            "akreditas": 0.633,
            "fasilitas": 0.260,
            "jarak": 0.106
        }
    }
}

function fuzzyComparisonMatrix() {
  return {
    kriteria: ["akreditasi", "fasilitas", "jarak"],
    matrix: [
      [ [1, 1, 1], [2, 3, 4], [4, 5, 6] ],
      [ [1/4, 1/3, 1/2], [1, 1, 1], [2, 3, 4] ],
      [ [1/6, 1/5, 1/4], [1/4, 1/3, 1/2], [1, 1, 1] ]
    ]}
};

function scalaSaatyMatrix() {
  const matrix = [
    [1,   3,   5],
    [1/3, 1,   3],
    [1/5, 1/3, 1]
  ];

  return matrix
};

function school() {
    return {
        "school": [
        {
            "id": 1,
            "name": "SMAN 1 Babakan Madang",
            "akreditasi": 3,
            "fasilitas": 1,
            "jarak": 3
        },
        {
            "id": 2,
            "name": "SMAN 1 Bojong Gede",
            "akreditasi": 3,
            "fasilitas": 3,
            "jarak": 1
        },
        {
            "id": 3,
            "name": "SMAN 1 Caringin",
            "akreditasi": 3,
            "fasilitas": 3,
            "jarak": 1
        }
    ]
    }
}

function seeders() {
    return {
    "schools": [
        {
            "school_id": "school-1",
            "name": "SMAN 1 Babakan Madang",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/327D7567-4785-4231-A0BD-1DCD17149087"
        },
        {
            "school_id": "school-2",
            "name": "SMAN 1 Bojong Gede",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/31767C1C-5E40-42FC-8417-F3D72853C1DC"
        },
        {
            "school_id": "school-3",
            "name": "SMKN 1 Bojong Gede",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/328D04E8-42A1-4CFF-9C0B-8D6B478F3DC8"
        },
        {
            "school_id": "school-4",
            "name": "SMAN 1 Caringin",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5A973960-91BB-44E2-9A69-BF89C19F0691"
        },
        {
            "school_id": "school-5",
            "name": "SMAN 1 Cariu",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/09934F36-2F76-4F13-8EBC-F412393EDDDF"
        },
        {
            "school_id": "school-6",
            "name": "SMKN 1 Cariu",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/FB111095-3AF8-47DF-8D55-FCD948BC3492"
        },
        {
            "school_id": "school-7",
            "name": "SMAN 1 Ciampea",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5B5AF952-EC28-4F7A-ADDD-83179265D988"
        },
        {
            "school_id": "school-8",
            "name": "SMAN 1 Ciawi",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E65E4EAB-D2CB-4069-B421-3AAFF43B6F6F"
        },
        {
            "school_id": "school-9",
            "name": "SMAN 1 Cibinong",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/FEDF470A-9546-4F2A-A633-75828AB281BB"
        },
        {
            "school_id": "school-10",
            "name": "SMAN 2 Cibinong",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/DBE9F307-AC0E-4FEC-AEF4-588F2C17BF73"
        },
        {
            "school_id": "school-11",
            "name": "SMAN 3 Cibinong",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D33096A6-0C7D-4ADC-9985-9E4B41041BF7"
        },
        {
            "school_id": "school-12",
            "name": "SMAN 4 Cibinong",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/14D5F67B-654D-4316-A5FC-94578ED97E00"
        },
        {
            "school_id": "school-13",
            "name": "SMKN 1 Cibinong",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E222ED94-13E7-40D2-A0E5-1221BE7F54C5"
        },
        {
            "school_id": "school-14",
            "name": "SMKN 2 Cibinong",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7E37B53B-8758-46CC-9CBB-192EE1BC38CC"
        },
        {
            "school_id": "school-15",
            "name": "SMAN 1 Cibungbulang",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4172AF88-8455-4B07-B4AB-CCDFB03A9951"
        },
        {
            "school_id": "school-16",
            "name": "SMAN 1 Cigombong",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2E549B70-AA2D-4E2B-8F02-2C81EFAE78A1"
        },
        {
            "school_id": "school-17",
            "name": "SMAN 1 Cigudeg",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4AD1E69E-6CF4-4299-BDB7-1DEA727F5381"
        },
        {
            "school_id": "school-18",
            "name": "SMAN 1 Cijeruk",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/BA726019-5819-4FCA-9964-87506728E7D1"
        },
        {
            "school_id": "school-19",
            "name": "SMAN 1 Cileungsi",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/6C4672BD-B7F7-4135-ABD9-C9A553A8DBF8"
        },
        {
            "school_id": "school-20",
            "name": "SMAN 2 Cileungsi",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/1D155FAF-9918-43D7-B3A3-77A6FCE75DA0"
        },
        {
            "school_id": "school-21",
            "name": "SMKN 1 Cileungsi",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A74A6842-26C1-41BD-A8ED-0BE331526747"
        },
        {
            "school_id": "school-22",
            "name": "SMAN 1 Ciomas",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7269A9FD-A3BE-4947-86C8-4C67312E05AC"
        },
        {
            "school_id": "school-23",
            "name": "SMKN 1 Ciomas",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B959EC8F-A5E3-4E7F-A3B5-2A2E25690A25"
        },
        {
            "school_id": "school-24",
            "name": "SMAN 1 Cisarua",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/6D33C951-7E0D-4191-85D3-87EE7491E231"
        },
        {
            "school_id": "school-25",
            "name": "SMKN 1 Cisarua",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/AB3BD14A-686D-4FFA-84F5-EED5987EED5F"
        },
        {
            "school_id": "school-26",
            "name": "SMAN 1 Ciseeng",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B824C00A-B2C7-4575-89B6-953F5E9634EF"
        },
        {
            "school_id": "school-27",
            "name": "SMAN 1 Citeureup",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/8C4695B4-2781-48A5-91F6-42198B73ABB8"
        },
        {
            "school_id": "school-28",
            "name": "SMAN 1 Dramaga",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/0DCFCF97-968D-4EE3-800A-483E3E222ED2"
        },
        {
            "school_id": "school-29",
            "name": "SMAN 1 Gunung Sindur",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A2321281-57A2-4910-94B3-2CA1082E213B"
        },
        {
            "school_id": "school-30",
            "name": "SMKN 1 Gunung Sindur",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C24D7182-4969-4FF2-A861-DF4B8DE7C3E3"
        },
        {
            "school_id": "school-31",
            "name": "SMAN 1 Gunung Putri",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/57D7A824-4A1E-4930-82EA-FFDD67405064"
        },
        {
            "school_id": "school-32",
            "name": "SMAN 2 Gunung Putri",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/8154DB21-C95D-4807-936F-72517140E9E3"
        },
        {
            "school_id": "school-33",
            "name": "SMKN 1 Gunung Putri",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E951E23D-9DBD-47D5-AFCD-DF361BA39012"
        },
        {
            "school_id": "school-34",
            "name": "SMAN 1 Jasinga",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B4BC18A1-7564-492F-AE77-519D01F82558"
        },
        {
            "school_id": "school-35",
            "name": "SMAN 1 Jonggol",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/411C70F8-D47B-423B-8EAA-FE5F83A963C7"
        },
        {
            "school_id": "school-36",
            "name": "SMAN 2 Jonggol",
            "akreditas": "B",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2803E1B7-28BC-403D-AD60-1D716AE7780A"
        },
        {
            "school_id": "school-37",
            "name": "SMKN 1 Kemang",
            "akreditas": "B",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/ADBA59F1-E0F5-44D6-91E0-4BCF31F9A9E6"
        },
        {
            "school_id": "school-38",
            "name": "SMAN 1 Klapanunggal",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D9528482-CCAE-4825-81D7-638673193AB9"
        },
        {
            "school_id": "school-39",
            "name": "SMAN 1 Leuwiliang",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/84B5C520-2C96-4472-9FD4-888668C64D56"
        },
        {
            "school_id": "school-40",
            "name": "SMKN 1 Leuwiliang",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/3AE01CE7-ABFD-4FC0-8787-259CF3443A67"
        },
        {
            "school_id": "school-41",
            "name": "SMAN 1 Leuwisadeng",
            "akreditas": "B",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/9D67CABA-CCFE-489D-BAD2-0133CD9FFF1C"
        },
        {
            "school_id": "school-42",
            "name": "SMAN 1 Megamendung",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/AB2E30EB-A8F4-402C-A33C-63E13ACEB989"
        },
        {
            "school_id": "school-43",
            "name": "SMAN 1 Nanggung",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4A21C1DA-57E6-40C0-A00D-55C539F5D73E"
        },
        {
            "school_id": "school-44",
            "name": "SMAN 1 Pamijahan",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C84CEA27-38E8-4DA5-A763-11B6A1F5586D"
        },
        {
            "school_id": "school-45",
            "name": "SMAN 1 Parung",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D7FB63CE-6A66-4F81-B2F7-CEAA8A7FAB4A"
        },
        {
            "school_id": "school-46",
            "name": "SMAN 1 Parung Panjang",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7602CA38-F27D-44DF-BC1E-84043509ACD2"
        },
        {
            "school_id": "school-47",
            "name": "SMAN 1 Ranca Bungur",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/ABB6D1F4-F7C8-4531-B775-69557505F231"
        },
        {
            "school_id": "school-48",
            "name": "SMAN 1 Rumpin",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D2277861-5306-460A-BB52-1EA24CC566AC"
        },
        {
            "school_id": "school-49",
            "name": "SMAN 1 Sukajaya",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A2F55039-9258-4CB9-9487-C4833C90B985"
        },
        {
            "school_id": "school-50",
            "name": "SMAN 1 Sukamakmur",
            "akreditas": "B",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/27C876C2-8FAB-4FEC-BF96-1A893C85E6AF"
        },
        {
            "school_id": "school-51",
            "name": "SMAN 1 Sukaraja",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7E695E9A-082C-41C0-B0D1-AC7798CCB052"
        },
        {
            "school_id": "school-52",
            "name": "SMAN 1 Tajurhalang",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C5A7DB58-1A97-4FA8-B48C-BED3B9D13CAE"
        },
        {
            "school_id": "school-53",
            "name": "SMAN 1 Tamansari",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/58B0343F-1533-4105-BB1C-A0BCBAFD7AD7"
        },
        {
            "school_id": "school-54",
            "name": "SMAN 1 Tanjung Sari",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C9AFE91E-10D0-43AD-8730-97B2901D82AB"
        },
        {
            "school_id": "school-55",
            "name": "SMAN 1 Tenjo",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E8870AC1-3391-43B3-8FB1-A519218ABED3"
        },
        {
            "school_id": "school-56",
            "name": "SMAN 1 Tenjolaya",
            "akreditas": "B",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B98C5B98-1877-47B9-B49E-1327DEF69F68"
        },
        {
            "school_id": "school-57",
            "name": "MAN 1 Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/30F972DC-F145-4AB9-B6C9-519B48144486"
        },
        {
            "school_id": "school-58",
            "name": "MAN 2 Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5058E19F-8E8F-4FDE-9FFB-79B936F201BE"
        },
        {
            "school_id": "school-59",
            "name": "MAN 3 Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/71D7CD84-4EB5-4713-A046-35D43E655BCB"
        },
        {
            "school_id": "school-60",
            "name": "MAN 4 Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/0D3A97C2-0DBE-4D75-8911-958E5126E353"
        },
        {
            "school_id": "school-61",
            "name": "MAN 5 Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "negeri",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/CBB4D592-C6D4-448C-A171-8C7DB5119D03"
        },
        {
            "school_id": "school-62",
            "name": "SMA PELITA HARAPAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/8EFC53307E62178D9859"
        },
        {
            "school_id": "school-63",
            "name": "SMA TARUNA BANGSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E3E6C063181BA27349E5"
        },
        {
            "school_id": "school-64",
            "name": "SMA NASIONAL PLUS BPK PENABUR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C01C525831E737AAC904"
        },
        {
            "school_id": "school-65",
            "name": "SMA Sampoerna",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DB972C86F7A3807139AD"
        },
        {
            "school_id": "school-66",
            "name": "SMA INSAN CENDEKIA BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B1FF7F4A7F2EC5B1BBF1"
        },
        {
            "school_id": "school-67",
            "name": "SMK PGRI BABAKANMADANG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/93FD48E3DC78D74ED6D1"
        },
        {
            "school_id": "school-68",
            "name": "SMK AL - MUTTAQIEN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5BE949CB54B8D779A26B"
        },
        {
            "school_id": "school-69",
            "name": "MA AL-BASIT",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2C945260-BBED-40CB-9DE3-795F8ED92B28"
        },
        {
            "school_id": "school-70",
            "name": "SMA LOGOS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/96AB0514D352AF941905"
        },
        {
            "school_id": "school-71",
            "name": "SMK AL BASYARIAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/70709714F4D677FF43DB"
        },
        {
            "school_id": "school-72",
            "name": "SMK WIRABUANA 1",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/81AA5CC9ABBFD2616A39"
        },
        {
            "school_id": "school-73",
            "name": "SMK WIRABUANA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/ABAC888BE5CD31C281C5"
        },
        {
            "school_id": "school-74",
            "name": "SMK PARIWISATA CITAYAM",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/51E1AA43D26F1CA32D0A"
        },
        {
            "school_id": "school-75",
            "name": "SMK MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/ECBDBF575D8DEBCC93AC"
        },
        {
            "school_id": "school-76",
            "name": "SMK MEDIA TEKNOLOGI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5CD5B62E37B993C0AAD2"
        },
        {
            "school_id": "school-77",
            "name": "SMK KESEHATAN LOGOS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5BC34EBD6EC0F354BA5D"
        },
        {
            "school_id": "school-78",
            "name": "SMA DARUL FAIZIN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/6CB1EA0F1356A5AD1F23"
        },
        {
            "school_id": "school-79",
            "name": "SMK FARMAKO MEDIKA PLUS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/2BE1B7B430DD5DA3210F"
        },
        {
            "school_id": "school-80",
            "name": "MA AL ASMAAUL HUSNA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70037039"
        },
        {
            "school_id": "school-81",
            "name": "MA AL-MUCHTARI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70028616"
        },
        {
            "school_id": "school-82",
            "name": "MAGHFIRAH ISLAMIC LEADERSHIP BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70028615"
        },
        {
            "school_id": "school-83",
            "name": "MAS TARBIYATUL HUDA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280174"
        },
        {
            "school_id": "school-84",
            "name": "SMK IT AR-RISALAH CARIU",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1CC61B1EA6CCF7547CD1"
        },
        {
            "school_id": "school-85",
            "name": "SMAS DARUTAFSIR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/47CE9B4B4F0876DD794F"
        },
        {
            "school_id": "school-86",
            "name": "SMK TI Bazma",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A29037D2780334B811F7"
        },
        {
            "school_id": "school-87",
            "name": "SMKS GEO INFORMATIKA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/BFA631AE2B5AF218511E"
        },
        {
            "school_id": "school-88",
            "name": "SMKS PELITA CIAMPEA 1",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/8801149BBABAE11C2718"
        },
        {
            "school_id": "school-89",
            "name": "SMKS PELITA CIAMPEA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/41395E2EEE05A7010700"
        },
        {
            "school_id": "school-90",
            "name": "MAS DARUL FALLAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280136"
        },
        {
            "school_id": "school-91",
            "name": "MAS DARUT TAFSIR",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280145"
        },
        {
            "school_id": "school-92",
            "name": "SMAS AMALIAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/89EFC4CB0F7C9028AC31"
        },
        {
            "school_id": "school-93",
            "name": "SMAS FATHAN MUBINA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/BA27B0186B9DD91C2A4D"
        },
        {
            "school_id": "school-94",
            "name": "SMAS PGRI CIAWI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DA319CEA523813BCCADF"
        },
        {
            "school_id": "school-95",
            "name": "SMAS PURWA BHAKTI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9910E2A6CBCF29B2E84C"
        },
        {
            "school_id": "school-96",
            "name": "SMKS AMALIAH 1",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/61E2ADFD5AEA82C877AC"
        },
        {
            "school_id": "school-97",
            "name": "SMKS AMALIAH 2",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E5C63A8CBB53C4DA136A"
        },
        {
            "school_id": "school-98",
            "name": "SMKS KUSUMA BANGSA YASTIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/20ED1948773E59672795"
        },
        {
            "school_id": "school-99",
            "name": "SMKS SUMPAH PEMUDA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/0AE933BC70A39141A08E"
        },
        {
            "school_id": "school-100",
            "name": "SMKS WIJAYA PLUS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1E3B9564051BD99CDD53"
        },
        {
            "school_id": "school-101",
            "name": "MAS FATHAN MUBINA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280147"
        },
        {
            "school_id": "school-102",
            "name": "SMAS CITRA NUSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/45E9674911434A4DFEFC"
        },
        {
            "school_id": "school-103",
            "name": "SMAS MARDI WALUYA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/2D3226003F77EC8C55DA"
        },
        {
            "school_id": "school-104",
            "name": "SMAS AL NUR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4F1911A4BAD42D72ACC2"
        },
        {
            "school_id": "school-105",
            "name": "SMAS AL ASIYAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1CA9C0ED812455F7F1B0"
        },
        {
            "school_id": "school-106",
            "name": "SMA ISLAM TERPADU AL-MADINAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/473C7C5806D155497E47"
        },
        {
            "school_id": "school-107",
            "name": "SMAIT RAHMANIYAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5384AB36C358297E6F7C"
        },
        {
            "school_id": "school-108",
            "name": "SMA IT ANUGERAH INSANI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EB34D00B6A521B966520"
        },
        {
            "school_id": "school-109",
            "name": "SMA CIPTA CENDIKIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/CAEC3D3EDD699CF99919"
        },
        {
            "school_id": "school-110",
            "name": "SMA Al-Qur`an Wahdah Islamiyah Cibinong",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/3B0604964B4AC653F409"
        },
        {
            "school_id": "school-111",
            "name": "SMAS PGRI CIBINONG",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/22F6323A92528189457B"
        },
        {
            "school_id": "school-112",
            "name": "SMKS INSAN KREATIF",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/86EF7A7F2E75D50357D4"
        },
        {
            "school_id": "school-113",
            "name": "SMKS MEKANIK CIBINONG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/698DD07C1A0E4180F17E"
        },
        {
            "school_id": "school-114",
            "name": "SMKS BANGUN NUSA BANGSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/722628B14641AD4E8DAF"
        },
        {
            "school_id": "school-115",
            "name": "SMKS MOTIVASI INSANI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/D23963840A9BA27F86FD"
        },
        {
            "school_id": "school-116",
            "name": "SMKS DEWANTARA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/F50D65C8328CBE0F14D0"
        },
        {
            "school_id": "school-117",
            "name": "SMKS BINANTARA CIBINONG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1E10882895C606F8994E"
        },
        {
            "school_id": "school-118",
            "name": "SMKS MIGAS CIBINONG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1F7F91219E5E05E1CA00"
        },
        {
            "school_id": "school-119",
            "name": "SMKS PGRI 2 CIBINONG",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/3CD1EFB19E09FCDCF261"
        },
        {
            "school_id": "school-120",
            "name": "SMK PLUS PGRI 1 CIBINONG",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E7868F026948C08965A4"
        },
        {
            "school_id": "school-121",
            "name": "SMK PLUS PELITA NUSANTARA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1DC3ACB207AE1069BE5D"
        },
        {
            "school_id": "school-122",
            "name": "MAS AL ASIYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280100"
        },
        {
            "school_id": "school-123",
            "name": "MAS MUTMA INAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280162"
        },
        {
            "school_id": "school-124",
            "name": "MAS NURUL FURQON",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280165"
        },
        {
            "school_id": "school-125",
            "name": "SMA TAHFIZH AL BASYIR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E1718264CE34AD2C2838"
        },
        {
            "school_id": "school-126",
            "name": "SMKS PANDU BOGOR",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C84415EC7108A1B916CC"
        },
        {
            "school_id": "school-127",
            "name": "MAS AULIA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280128"
        },
        {
            "school_id": "school-128",
            "name": "SMA ISLAM AL AZHAR 24",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/79D46E0785730B6A62B3"
        },
        {
            "school_id": "school-129",
            "name": "SMAS AL KAHFI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B8D1CA80190766E26A05"
        },
        {
            "school_id": "school-130",
            "name": "SMKS NUANSA BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/904C72511922893F802C"
        },
        {
            "school_id": "school-131",
            "name": "SMKS TRIWIJAYA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/0ECEEE7046759FCAC0AE"
        },
        {
            "school_id": "school-132",
            "name": "MAS AL FURQONIYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280108"
        },
        {
            "school_id": "school-133",
            "name": "MAS Al kahfi",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/69886185"
        },
        {
            "school_id": "school-134",
            "name": "MAS DAARUL ULUUM LIDO",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280135"
        },
        {
            "school_id": "school-135",
            "name": "MAS DARUNNAJAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280143"
        },
        {
            "school_id": "school-136",
            "name": "SMKS ASY SYUKUR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/84CC912175436CCAB791"
        },
        {
            "school_id": "school-137",
            "name": "MA MANBAUL ULUM",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70032948"
        },
        {
            "school_id": "school-138",
            "name": "SMA Islam Al-Azhar BSD",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/10C122BEBFAE489CD7DA"
        },
        {
            "school_id": "school-139",
            "name": "SMA IT Al Fityan Boarding School Bogor",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/77DB06B37DBDEBC82E73"
        },
        {
            "school_id": "school-140",
            "name": "SMA Qur`an el Tahfidh",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1875FC87EF728EB3B7C1"
        },
        {
            "school_id": "school-141",
            "name": "SMA REGINA CAELI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/0EFE27C3B7162D954DA0"
        },
        {
            "school_id": "school-142",
            "name": "SMAS FAJAR DUNIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/3A2B876157721464BD8D"
        },
        {
            "school_id": "school-143",
            "name": "SMAS MUHAMMADIYAH CILEUNGSI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9CB42385A604ED989506"
        },
        {
            "school_id": "school-144",
            "name": "SMAS WIDYA KUSUMA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/72BB42C0B87D70B610CC"
        },
        {
            "school_id": "school-145",
            "name": "SMK BINA MANDIRI MULTIMEDIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/12FA9FAAA9EE36E7E48E"
        },
        {
            "school_id": "school-146",
            "name": "SMK PARIWISATA METLAND SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/02830A896109ECAB8E59"
        },
        {
            "school_id": "school-147",
            "name": "SMK YAPA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/62E7A93CA675B7AF2824"
        },
        {
            "school_id": "school-148",
            "name": "SMKS AL HADIID 1 CILEUNGSI BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/83359C5A2239FAC790EA"
        },
        {
            "school_id": "school-149",
            "name": "SMKS AL HADIID 2 CILEUNGSI BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A978E425C45839800E52"
        },
        {
            "school_id": "school-150",
            "name": "SMKS BINA TEKNIKA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/44348E0FA4AF6E5763A0"
        },
        {
            "school_id": "school-151",
            "name": "SMKS DARMA BAKTI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/39A0F68E43CB91DDC697"
        },
        {
            "school_id": "school-152",
            "name": "SMKS FAJAR SENTOSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/D0ABDBCF4A67B1DD2CB6"
        },
        {
            "school_id": "school-153",
            "name": "SMKS FARMASI BHAKTI KENCANA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C3B3185369199DCA2BC2"
        },
        {
            "school_id": "school-154",
            "name": "SMKS FATAHILLAH CILEUNGSI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/F90B8BE0663EC0A64757"
        },
        {
            "school_id": "school-155",
            "name": "SMKS MUHAMMADIYAH 1 CILEUNGSI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/FE5A13C1AD75B695AE82"
        },
        {
            "school_id": "school-156",
            "name": "SMKS MUHAMMADIYAH 2 CILEUNGSI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5DF840FD7E8C09F941CA"
        },
        {
            "school_id": "school-157",
            "name": "SMKS MUHAMMADIYAH 3 CILEUNGSI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/7B26C8AC26DBD48C1545"
        },
        {
            "school_id": "school-158",
            "name": "SMKS PIJAR ALAM 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/7A5BAD05FFF8E0CF3312"
        },
        {
            "school_id": "school-159",
            "name": "SMKS TAMAN WISATA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/05A7CE438CDD92112040"
        },
        {
            "school_id": "school-160",
            "name": "MAS AL FATAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280107"
        },
        {
            "school_id": "school-161",
            "name": "MAS AN NIZHAMIYYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280125"
        },
        {
            "school_id": "school-162",
            "name": "MAS DARUL MARHAMAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280140"
        },
        {
            "school_id": "school-163",
            "name": "SMAS IBNU AQIL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A8ED0A5CED958C770935"
        },
        {
            "school_id": "school-164",
            "name": "SMK INFORMATIKA BINA GENERASI 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/07AAEB61C1EFFACEBD04"
        },
        {
            "school_id": "school-165",
            "name": "SMKS IBNU AQIL BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/03F667094F629A537670"
        },
        {
            "school_id": "school-166",
            "name": "SMKS INFORMATIKA BINA GENERASI BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E9C106526C169747D853"
        },
        {
            "school_id": "school-167",
            "name": "MAS INSAN TAQWA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280150"
        },
        {
            "school_id": "school-168",
            "name": "MAS PPIQ",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20276325"
        },
        {
            "school_id": "school-169",
            "name": "SMA ISLAM DAARUL WASIILAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/20E248407B34216247CF"
        },
        {
            "school_id": "school-170",
            "name": "SMAS CISARUA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/04DF0F872FED9650A7B0"
        },
        {
            "school_id": "school-171",
            "name": "SMK FAJAR UTAMA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/63A2509E7E839C734569"
        },
        {
            "school_id": "school-172",
            "name": "SMKS BM AL IKHLAS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/2B01141FE5F95123E4C8"
        },
        {
            "school_id": "school-173",
            "name": "SMKS KESEHATAN AL IKHLAS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4D4A44A2464ECACA3581"
        },
        {
            "school_id": "school-174",
            "name": "SMA FITRAH ISLAMIC WORLD ACADEMY",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/661F714DDF0CFE85DCCC"
        },
        {
            "school_id": "school-175",
            "name": "SMA IT DINAMIKA UMAT",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/077722DA86075C6D3405"
        },
        {
            "school_id": "school-176",
            "name": "SMAS AL MUKLISIN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9AB12A732F8188042A39"
        },
        {
            "school_id": "school-177",
            "name": "SMAS RIYADLUL JANNAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B21328D3B9E8BFB9C201"
        },
        {
            "school_id": "school-178",
            "name": "SMKS HARAPAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/7395FC91879E88F163CA"
        },
        {
            "school_id": "school-179",
            "name": "MAS AL IRSYADIYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280115"
        },
        {
            "school_id": "school-180",
            "name": "MAS AL MANAR",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280117"
        },
        {
            "school_id": "school-181",
            "name": "MAS AL MUKHLISHIN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280120"
        },
        {
            "school_id": "school-182",
            "name": "SMA INTERNATIONAL ISLAMIC SCHOOL OF INDONESIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E3FA1E6E2CBB94C5C6B6"
        },
        {
            "school_id": "school-183",
            "name": "SMAS INDOCEMENT",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/90A9DD1059D9EE20C84F"
        },
        {
            "school_id": "school-184",
            "name": "SMAS TRIPLE J CITEUREUP",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4D789901456A888E50DB"
        },
        {
            "school_id": "school-185",
            "name": "SMKS 1 TRIPLE J",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/6BDE47D8376A777BD15B"
        },
        {
            "school_id": "school-186",
            "name": "SMKS 2 TRIPLE J ",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/23E1A6BA28B45F06CA9A"
        },
        {
            "school_id": "school-187",
            "name": "SMKS ASH SHOHEH 2 CITEUREUP",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4DC28DE3705ECF9E3216"
        },
        {
            "school_id": "school-188",
            "name": "SMKS KESEHATAN ANNISA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EC81E6E09A28FBA42893"
        },
        {
            "school_id": "school-189",
            "name": "SMKS KESEHATAN ANNISA 3",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DC645F27F2625E1489C2"
        },
        {
            "school_id": "school-190",
            "name": "SMKS KESEHATAN TRIPLE J",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/57F2FCFE6E3A98D01559"
        },
        {
            "school_id": "school-191",
            "name": "SMKS PGRI CITEUREUP",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5F16C48477874A4E202D"
        },
        {
            "school_id": "school-192",
            "name": "SMKS TI ANNISA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/FF404945C944F641516D"
        },
        {
            "school_id": "school-193",
            "name": "MA Budi Guna",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70026820"
        },
        {
            "school_id": "school-194",
            "name": "MA TAHFIDZ FADLULLOH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70039872"
        },
        {
            "school_id": "school-195",
            "name": "SMAS KORNITA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A031F0B2305045D236E6"
        },
        {
            "school_id": "school-196",
            "name": "SMA ISLAM AL-GHOZALI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/89BBD3609128644682A2"
        },
        {
            "school_id": "school-197",
            "name": "SMA IT DARUL QUR AN",
            "akreditas": "A",
            "fasilitas": "Cukup",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/F389AFC5CA852D5FC149"
        },
        {
            "school_id": "school-198",
            "name": "SMA IT DARUL QUR`AN MULIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C535A07C1B09D43F86FE"
        },
        {
            "school_id": "school-199",
            "name": "SMAS NURUL FALAAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9BA108EF143A36E7158B"
        },
        {
            "school_id": "school-200",
            "name": "MAS AL INAYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280114"
        },
        {
            "school_id": "school-201",
            "name": "SMA Daar El-Salam",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/68E3858B2AACAF077232"
        },
        {
            "school_id": "school-202",
            "name": "SMA GENERUS MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C92A1747360483FC4A51"
        },
        {
            "school_id": "school-203",
            "name": "SMA KRISTEN PENABUR KOTA WISATA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C8D754C6C3D96438B753"
        },
        {
            "school_id": "school-204",
            "name": "SMA QURAN ASY SYAHID",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/311D765587C4811C3524"
        },
        {
            "school_id": "school-205",
            "name": "SMA Sekolah Alam Cikeas",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4FE8A97B50B73065BC91"
        },
        {
            "school_id": "school-206",
            "name": "SMAS AN NUR ALIYYAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E4DD111DB7943AA16FDD"
        },
        {
            "school_id": "school-207",
            "name": "SMAS BINA BANGSA MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4C9F595C2F8F0976A0E3"
        },
        {
            "school_id": "school-208",
            "name": "SMAS BINA PENDIDIKAN 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B3F8618DE5B553C9E861"
        },
        {
            "school_id": "school-209",
            "name": "SMAS BUNDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B5AAB0C775FA36E9EC3F"
        },
        {
            "school_id": "school-210",
            "name": "SMAS BUNDA HATI KUDUS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/636F54939FCCBFB8A01E"
        },
        {
            "school_id": "school-211",
            "name": "SMAS FAJAR HIDAYAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/15D29E5E00864AD53288"
        },
        {
            "school_id": "school-212",
            "name": "SMAS GLOBAL MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/96B433E52F244E4A2DCA"
        },
        {
            "school_id": "school-213",
            "name": "SMAS KETAPANG 3",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4739BB68423F5226BF30"
        },
        {
            "school_id": "school-214",
            "name": "SMAS LABS SCHOOL KAIZEN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A93B1AAC39C381ECDE0D"
        },
        {
            "school_id": "school-215",
            "name": "SMAS PILAR INDONESIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/637980F98AD55FF2FE3F"
        },
        {
            "school_id": "school-216",
            "name": "SMAS PM AT TAQWA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5EA12F3FF4FFB247E4A7"
        },
        {
            "school_id": "school-217",
            "name": "SMAS YAPIDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C21A4CECADBEBA313CC4"
        },
        {
            "school_id": "school-218",
            "name": "SMAS YAPISA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A944B528FE0D6ED3CE76"
        },
        {
            "school_id": "school-219",
            "name": "SMKS BINA BANGSA MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/36ABB5466A89BBBF9168"
        },
        {
            "school_id": "school-220",
            "name": "SMKS BINA PENDIDIKAN 3 BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9C0569DDEB8428BDD8C8"
        },
        {
            "school_id": "school-221",
            "name": "SMKS BIT BINA AULIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E29CBE8686F408123E41"
        },
        {
            "school_id": "school-222",
            "name": "SMKS GENERASI MANDIRI GUNUNG PUTRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/15056AC2430E599BC8A9"
        },
        {
            "school_id": "school-223",
            "name": "MAS NUURUL QUR AN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20276323"
        },
        {
            "school_id": "school-224",
            "name": "MAS TAHFIZH AL KAUKAB",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70009000"
        },
        {
            "school_id": "school-225",
            "name": "SMKS GIRI TARUNA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/11A98E3B5AAA3867C716"
        },
        {
            "school_id": "school-226",
            "name": "SMA CITRA BERKAT",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4D29D770CF535FFAF9E5"
        },
        {
            "school_id": "school-227",
            "name": "SMA ISLAM CIKAL HARAPAN 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A95C48A043E300CC79C9"
        },
        {
            "school_id": "school-228",
            "name": "SMA IT AL ANDALUS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/6C6FCC9E9C9969FA26DE"
        },
        {
            "school_id": "school-229",
            "name": "SMA SAINTEK UHAMKA BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/CE469CA89D38263A6EB7"
        },
        {
            "school_id": "school-230",
            "name": "SMAS BINA INSAN JONGGOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/97255C297826C077066E"
        },
        {
            "school_id": "school-231",
            "name": "SMAS ISLAM RIYADLUL JANNAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/6792791DBF1E37AF3E2A"
        },
        {
            "school_id": "school-232",
            "name": "SMAS NURUL HIKMAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EF661348AA70C46D124A"
        },
        {
            "school_id": "school-233",
            "name": "SMK IDN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/94E751F98C492E1E0FB9"
        },
        {
            "school_id": "school-234",
            "name": "SMA BOASH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/11010211CA3405ACF74D"
        },
        {
            "school_id": "school-235",
            "name": "SMAS MADANIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/BB80660076399C3A4304"
        },
        {
            "school_id": "school-236",
            "name": "SMAS MARSUDIRINI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B64D7FF81B34D467822B"
        },
        {
            "school_id": "school-237",
            "name": "SMAS SMART EKSELENSIA INDONESIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E10B6781E9C2A1DE37F4"
        },
        {
            "school_id": "school-238",
            "name": "SMAS YADIKA 7 BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/2DC1DA79E523393CA612"
        },
        {
            "school_id": "school-239",
            "name": "SMK AL-AQSYAR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B40B9E159F2EF02284C1"
        },
        {
            "school_id": "school-240",
            "name": "SMK BOASH 1",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1F246014F6117365E7D8"
        },
        {
            "school_id": "school-241",
            "name": "SMK BOASH 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/FFE04DF0A498FEEC9863"
        },
        {
            "school_id": "school-242",
            "name": "SMKS NUSANTARA MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/93737E363BD7DEB461CF"
        },
        {
            "school_id": "school-243",
            "name": "SMKS PENERBANGAN ANGKASA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/4C2F975B241AA0D34783"
        },
        {
            "school_id": "school-244",
            "name": "SMKS TARUNA TERPADU 2",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9339ECA1B77BA0C1586D"
        },
        {
            "school_id": "school-245",
            "name": "SMKS WIYATA MANDALA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/215956E7032B51501002"
        },
        {
            "school_id": "school-246",
            "name": "SMKS YADIKA 7 BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/70008A1F6ACD79575C55"
        },
        {
            "school_id": "school-247",
            "name": "SMA SMART CIBINONG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1C583C88EECA7FD38754"
        },
        {
            "school_id": "school-248",
            "name": "MAS DAARUL MUGHNI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280133"
        },
        {
            "school_id": "school-249",
            "name": "SMA RAUDHATUL MUTTAQIN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/D0C4AD76B23A9F9382B9"
        },
        {
            "school_id": "school-250",
            "name": "SMAS AL HUSNA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B4A5B6978B41DE5D30C1"
        },
        {
            "school_id": "school-251",
            "name": "SMAS MAFAZAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/970E4D8ADC6A7BC8D13D"
        },
        {
            "school_id": "school-252",
            "name": "SMAS MUHAMMADIYAH PURASEDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/41B9AADD3A527347C8B6"
        },
        {
            "school_id": "school-253",
            "name": "SMK IT CYBER GLOBAL ORENZ",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/49ED756725E44D4F6A64"
        },
        {
            "school_id": "school-254",
            "name": "SMKS AL HAFIDZ",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/390FEB07434C7F8A3ACC"
        },
        {
            "school_id": "school-255",
            "name": "MAS AL GHIFFARI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280109"
        },
        {
            "school_id": "school-256",
            "name": "MAS DARUL IHSAN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280138"
        },
        {
            "school_id": "school-257",
            "name": "MAS MU ALLIMIEN MUHAMMADIYAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280160"
        },
        {
            "school_id": "school-258",
            "name": "MAS UMMUL QURO AL ISLAMI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280175"
        },
        {
            "school_id": "school-259",
            "name": "SMK KESEHATAN PROF. DR. MOESTOPO",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/08844E9D5F5ED22B4953"
        },
        {
            "school_id": "school-260",
            "name": "SMKS PESONA DYWANTARA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1A4D5C6F6BABE6E4A81D"
        },
        {
            "school_id": "school-261",
            "name": "SMA ISLAM ARAFAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EEE4F5E32F152C156DB7"
        },
        {
            "school_id": "school-262",
            "name": "SMK SUMPAH PEMUDA 3 GADOG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/D0F0A07DA006AC2BDE10"
        },
        {
            "school_id": "school-263",
            "name": "SMKS AGRIBISNIS DAN AGROTEKNOLOGI AMERTA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/94A0EBC524913A86D74D"
        },
        {
            "school_id": "school-264",
            "name": "SMKS ISLAM MIFTAHUL HUDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/228F994AFDA6B13E7AE3"
        },
        {
            "school_id": "school-265",
            "name": "SMKS YMA MEGAMENDUNG",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A7B8ACB12B4106D593DE"
        },
        {
            "school_id": "school-266",
            "name": "MAS MIFTAHUL HUDA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280158"
        },
        {
            "school_id": "school-267",
            "name": "SMKS CENDIKIA MUSLIM",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/113596C1D1D03D497E10"
        },
        {
            "school_id": "school-268",
            "name": "SMAS IBNU HAJAR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/ADFE424AB3620993F270"
        },
        {
            "school_id": "school-269",
            "name": "SMAS MUHAMMADIYAH PAMIJAHAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EA2ABDEC98A8DCD0777D"
        },
        {
            "school_id": "school-270",
            "name": "SMK SAHID",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/38FC5840287579BCF0D1"
        },
        {
            "school_id": "school-271",
            "name": "MAS AL AMIN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280098"
        },
        {
            "school_id": "school-272",
            "name": "MAS SAHID",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20276328"
        },
        {
            "school_id": "school-273",
            "name": "SMA SCHOOL OF UNIVERSE",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DC11B20D1A641AC365C2"
        },
        {
            "school_id": "school-274",
            "name": "SMAS DWIWARNA",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/75FA588E68F89F4C28A4"
        },
        {
            "school_id": "school-275",
            "name": "MA PLUS TAHFIDZ RAUDHATUL QURAN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70039787"
        },
        {
            "school_id": "school-276",
            "name": "MAS DARUL MUTTAQIN",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280141"
        },
        {
            "school_id": "school-277",
            "name": "MAS DARUSSALAM",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280144"
        },
        {
            "school_id": "school-278",
            "name": "SMAS MATHLAHUL HUDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/556CB70DED430FDF315A"
        },
        {
            "school_id": "school-279",
            "name": "SMK NIDA EL ADABI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/7BE8A66D4E925736FC45"
        },
        {
            "school_id": "school-280",
            "name": "SMKS BINA PUTRA MANDIRI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/EDA13912E971B0E83DF1"
        },
        {
            "school_id": "school-281",
            "name": "SMKS MAKARYA 2 BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A1471911D98016E4875E"
        },
        {
            "school_id": "school-282",
            "name": "SMAS AN NAJAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1023E0D73F867BE42E6A"
        },
        {
            "school_id": "school-283",
            "name": "SMAS IT YAPIRA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/A7B6AF2A0B92ADC7F8E4"
        },
        {
            "school_id": "school-284",
            "name": "SMAS PGRI RUMPIN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/34620200E8AD1513E9E1"
        },
        {
            "school_id": "school-285",
            "name": "SMKS ISLAM ASY SYUHADA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/61484D00C45AF3AD702E"
        },
        {
            "school_id": "school-286",
            "name": "MA AL ASHR",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70044156"
        },
        {
            "school_id": "school-287",
            "name": "MA FATH DARUT TAFSIR",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70033800"
        },
        {
            "school_id": "school-288",
            "name": "SMA IT INSAN CENDEKIA MADANI GUNUNG GEULIS BOGOR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/84D45CD2FDEC6F658E3E"
        },
        {
            "school_id": "school-289",
            "name": "SMAS AS SYUJA IYAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E997466B2671FEC97CDC"
        },
        {
            "school_id": "school-290",
            "name": "SMAS BINA RUHAMA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/66A5FDD11E83365AA9DB"
        },
        {
            "school_id": "school-291",
            "name": "SMK Darus Sa`adah",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/FAD0D425AFF4C3B3BF93"
        },
        {
            "school_id": "school-292",
            "name": "SMK MASTER INDONESIA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1AC8371427C1BF93E4CC"
        },
        {
            "school_id": "school-293",
            "name": "SMKS PUTRA PAKUAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/71BBF26E51722512E4CF"
        },
        {
            "school_id": "school-294",
            "name": "MA Ar-Ridho Sentul",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70044775"
        },
        {
            "school_id": "school-295",
            "name": "SMA AL WAFI IBS",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/791FA55DDFF9E2804B63"
        },
        {
            "school_id": "school-296",
            "name": "SMK BUANA INSAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DC3F104968EE3EBF62D9"
        },
        {
            "school_id": "school-297",
            "name": "MA NURANI TAHFIDZ",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70044415"
        },
        {
            "school_id": "school-298",
            "name": "MAS ASSA ADAH",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280127"
        },
        {
            "school_id": "school-299",
            "name": "SMA AL MINHAJ",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/F196087668B75832F6A9"
        },
        {
            "school_id": "school-300",
            "name": "SMA ISLAM TERPADU NURUL FIKRI BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/CCC6F22697E8725CD2AD"
        },
        {
            "school_id": "school-301",
            "name": "SMAS ISLAM HASMI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/353E7C70DF2BE1B86D97"
        },
        {
            "school_id": "school-302",
            "name": "SMK BAKTI NUSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9EBCD52F691604F3B385"
        },
        {
            "school_id": "school-303",
            "name": "MAS AL -ITTIHAD",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280116"
        },
        {
            "school_id": "school-304",
            "name": "SMKS AVICENA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/5FB15358EFF2DAD752E2"
        },
        {
            "school_id": "school-305",
            "name": "SMA IC MAGNET SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/0555CA31C4CC4C7B1590"
        },
        {
            "school_id": "school-306",
            "name": "SMK PUTRA PELITA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sek+B12:H308olah/95BB719525835D1AA90F"
        }
    ],
    "address": [
        {
            "id": "address-1",
            "name": "Babakan Madang"
        },
        {
            "id": "address-2",
            "name": "Bojong Gede"
        },
        {
            "id": "address-3",
            "name": "Caringin"
        },
        {
            "id": "address-4",
            "name": "Cariu"
        },
        {
            "id": "address-5",
            "name": "Ciampea"
        },
        {
            "id": "address-6",
            "name": "Ciawi"
        },
        {
            "id": "address-7",
            "name": "Cibinong"
        },
        {
            "id": "address-8",
            "name": "Cibungbulang"
        },
        {
            "id": "address-9",
            "name": "Cigombong"
        },
        {
            "id": "address-10",
            "name": "Cigudeg"
        },
        {
            "id": "address-11",
            "name": "Cijeruk"
        },
        {
            "id": "address-12",
            "name": "Cileungsi"
        },
        {
            "id": "address-13",
            "name": "Ciomas"
        },
        {
            "id": "address-14",
            "name": "Cisarua"
        },
        {
            "id": "address-15",
            "name": "Ciseeng"
        },
        {
            "id": "address-16",
            "name": "Citeureup"
        },
        {
            "id": "address-17",
            "name": "Dramaga"
        },
        {
            "id": "address-18",
            "name": "Gunung Sindur"
        },
        {
            "id": "address-19",
            "name": "Gunung Putri"
        },
        {
            "id": "address-20",
            "name": "Jasinga"
        },
        {
            "id": "address-21",
            "name": "Jonggol"
        },
        {
            "id": "address-22",
            "name": "Kemang"
        },
        {
            "id": "address-23",
            "name": "Klapanunggal"
        },
        {
            "id": "address-24",
            "name": "Leuwiliang"
        },
        {
            "id": "address-25",
            "name": "Leuwisadeng"
        },
        {
            "id": "address-26",
            "name": "Megamendung"
        },
        {
            "id": "address-27",
            "name": "Nanggung"
        },
        {
            "id": "address-28",
            "name": "Pamijahan"
        },
        {
            "id": "address-29",
            "name": "Parung"
        },
        {
            "id": "address-30",
            "name": "Parungpanjang"
        },
        {
            "id": "address-31",
            "name": "Ranca Bungur"
        },
        {
            "id": "address-32",
            "name": "Rumpin"
        },
        {
            "id": "address-33",
            "name": "Sukajaya"
        },
        {
            "id": "address-34",
            "name": "Sukamakmur"
        },
        {
            "id": "address-35",
            "name": "Sukaraja"
        },
        {
            "id": "address-36",
            "name": "Tajurhalang"
        },
        {
            "id": "address-37",
            "name": "Tamansari"
        },
        {
            "id": "address-38",
            "name": "Tanjung Sari"
        },
        {
            "id": "address-39",
            "name": "Tenjo"
        },
        {
            "id": "address-40",
            "name": "Tenjolaya"
        }
    ],
    "sub_address": [
        {
            "id": "sub-address-1",
            "address_id": "address-1",
            "name": "Babakan Madang"
        },
        {
            "id": "sub-address-2",
            "address_id": "address-1",
            "name": "Bojong Koneng"
        },
        {
            "id": "sub-address-3",
            "address_id": "address-1",
            "name": "Cijayanti"
        },
        {
            "id": "sub-address-4",
            "address_id": "address-1",
            "name": "Cipambuan"
        },
        {
            "id": "sub-address-5",
            "address_id": "address-1",
            "name": "Citaringgul"
        },
        {
            "id": "sub-address-6",
            "address_id": "address-1",
            "name": "Kadumangu"
        },
        {
            "id": "sub-address-7",
            "address_id": "address-1",
            "name": "Karang Tengah"
        },
        {
            "id": "sub-address-8",
            "address_id": "address-1",
            "name": "Sentul"
        },
        {
            "id": "sub-address-9",
            "address_id": "address-1",
            "name": "Sumur Batu"
        },
        {
            "id": "sub-address-10",
            "address_id": "address-2",
            "name": "Bojong Baru"
        },
        {
            "id": "sub-address-11",
            "address_id": "address-2",
            "name": "Bojonggede"
        },
        {
            "id": "sub-address-12",
            "address_id": "address-2",
            "name": "Cimanggis"
        },
        {
            "id": "sub-address-13",
            "address_id": "address-2",
            "name": "Kedung Waringin"
        },
        {
            "id": "sub-address-14",
            "address_id": "address-2",
            "name": "Ragajaya"
        },
        {
            "id": "sub-address-15",
            "address_id": "address-2",
            "name": "Rawa Panjang"
        },
        {
            "id": "sub-address-16",
            "address_id": "address-2",
            "name": "Susukan"
        },
        {
            "id": "sub-address-17",
            "address_id": "address-2",
            "name": "Waringin Jaya"
        },
        {
            "id": "sub-address-18",
            "address_id": "address-2",
            "name": "Pabuaran"
        },
        {
            "id": "sub-address-19",
            "address_id": "address-3",
            "name": "Pasir Buncir"
        },
        {
            "id": "sub-address-20",
            "address_id": "address-3",
            "name": "Caringin"
        },
        {
            "id": "sub-address-21",
            "address_id": "address-3",
            "name": "Ciderum"
        },
        {
            "id": "sub-address-22",
            "address_id": "address-3",
            "name": "Ciherang"
        },
        {
            "id": "sub-address-23",
            "address_id": "address-3",
            "name": "Pondok Cimande"
        },
        {
            "id": "sub-address-24",
            "address_id": "address-3",
            "name": "Cimande Hilir"
        },
        {
            "id": "sub-address-25",
            "address_id": "address-3",
            "name": "Cinagara"
        },
        {
            "id": "sub-address-26",
            "address_id": "address-3",
            "name": "Lemah Duhur"
        },
        {
            "id": "sub-address-27",
            "address_id": "address-3",
            "name": "Muara Jaya"
        },
        {
            "id": "sub-address-28",
            "address_id": "address-3",
            "name": "Pancawati"
        },
        {
            "id": "sub-address-29",
            "address_id": "address-3",
            "name": "Pasir"
        },
        {
            "id": "sub-address-30",
            "address_id": "address-3",
            "name": "Muncang Tangkil"
        },
        {
            "id": "sub-address-31",
            "address_id": "address-4",
            "name": "Babakan Raden"
        },
        {
            "id": "sub-address-32",
            "address_id": "address-4",
            "name": "Bantar Kuning"
        },
        {
            "id": "sub-address-33",
            "address_id": "address-4",
            "name": "Cariu"
        },
        {
            "id": "sub-address-34",
            "address_id": "address-4",
            "name": "Cibatu Tiga"
        },
        {
            "id": "sub-address-35",
            "address_id": "address-4",
            "name": "Cikutamahi"
        },
        {
            "id": "sub-address-36",
            "address_id": "address-4",
            "name": "Karya Mekar"
        },
        {
            "id": "sub-address-37",
            "address_id": "address-4",
            "name": "Kuta Mekar"
        },
        {
            "id": "sub-address-38",
            "address_id": "address-4",
            "name": "Mekarwangi"
        },
        {
            "id": "sub-address-39",
            "address_id": "address-4",
            "name": "Sukajadi"
        },
        {
            "id": "sub-address-40",
            "address_id": "address-4",
            "name": "Tegal Panjang"
        },
        {
            "id": "sub-address-41",
            "address_id": "address-5",
            "name": "Bojong Jengkol"
        },
        {
            "id": "sub-address-42",
            "address_id": "address-5",
            "name": "Bojong Rangkas"
        },
        {
            "id": "sub-address-43",
            "address_id": "address-5",
            "name": "Benteng"
        },
        {
            "id": "sub-address-44",
            "address_id": "address-5",
            "name": "Ciampea"
        },
        {
            "id": "sub-address-45",
            "address_id": "address-5",
            "name": "Ciampea Udik"
        },
        {
            "id": "sub-address-46",
            "address_id": "address-5",
            "name": "Cibadak"
        },
        {
            "id": "sub-address-47",
            "address_id": "address-5",
            "name": "Cibanteng"
        },
        {
            "id": "sub-address-48",
            "address_id": "address-5",
            "name": "Cibuntu"
        },
        {
            "id": "sub-address-49",
            "address_id": "address-5",
            "name": "Cicadas"
        },
        {
            "id": "sub-address-50",
            "address_id": "address-5",
            "name": "Cihideung Ilir"
        },
        {
            "id": "sub-address-51",
            "address_id": "address-5",
            "name": "Cihideung Udik"
        },
        {
            "id": "sub-address-52",
            "address_id": "address-5",
            "name": "Cinangka"
        },
        {
            "id": "sub-address-53",
            "address_id": "address-5",
            "name": "Tegal Waru"
        },
        {
            "id": "sub-address-54",
            "address_id": "address-6",
            "name": "Banjar Sari"
        },
        {
            "id": "sub-address-55",
            "address_id": "address-6",
            "name": "Banjar Wangi"
        },
        {
            "id": "sub-address-56",
            "address_id": "address-6",
            "name": "Banjar Waru"
        },
        {
            "id": "sub-address-57",
            "address_id": "address-6",
            "name": "Bendungan"
        },
        {
            "id": "sub-address-58",
            "address_id": "address-6",
            "name": "Bitung Sari"
        },
        {
            "id": "sub-address-59",
            "address_id": "address-6",
            "name": "Bojong Murni"
        },
        {
            "id": "sub-address-60",
            "address_id": "address-6",
            "name": "Ciawi"
        },
        {
            "id": "sub-address-61",
            "address_id": "address-6",
            "name": "Cibedug"
        },
        {
            "id": "sub-address-62",
            "address_id": "address-6",
            "name": "Cileungsi"
        },
        {
            "id": "sub-address-63",
            "address_id": "address-6",
            "name": "Citapen"
        },
        {
            "id": "sub-address-64",
            "address_id": "address-6",
            "name": "Jambu Luwuk"
        },
        {
            "id": "sub-address-65",
            "address_id": "address-6",
            "name": "Pandansari"
        },
        {
            "id": "sub-address-66",
            "address_id": "address-6",
            "name": "Teluk Pinang"
        },
        {
            "id": "sub-address-67",
            "address_id": "address-7",
            "name": "Cibinong"
        },
        {
            "id": "sub-address-68",
            "address_id": "address-7",
            "name": "Cirimekar"
        },
        {
            "id": "sub-address-69",
            "address_id": "address-7",
            "name": "Ciriung"
        },
        {
            "id": "sub-address-70",
            "address_id": "address-7",
            "name": "Harapan Jaya"
        },
        {
            "id": "sub-address-71",
            "address_id": "address-7",
            "name": "Karadenan"
        },
        {
            "id": "sub-address-72",
            "address_id": "address-7",
            "name": "Nanggewer"
        },
        {
            "id": "sub-address-73",
            "address_id": "address-7",
            "name": "Nanggewer Mekar"
        },
        {
            "id": "sub-address-74",
            "address_id": "address-7",
            "name": "Pabuaran"
        },
        {
            "id": "sub-address-75",
            "address_id": "address-7",
            "name": "Pabuaran Mekar"
        },
        {
            "id": "sub-address-76",
            "address_id": "address-7",
            "name": "Pakansari"
        },
        {
            "id": "sub-address-77",
            "address_id": "address-7",
            "name": "Pondok Rajeg"
        },
        {
            "id": "sub-address-78",
            "address_id": "address-7",
            "name": "Sukahati"
        },
        {
            "id": "sub-address-79",
            "address_id": "address-7",
            "name": "Tengah"
        },
        {
            "id": "sub-address-80",
            "address_id": "address-8",
            "name": "Cemplang"
        },
        {
            "id": "sub-address-81",
            "address_id": "address-8",
            "name": "Ciaruteun Ilir"
        },
        {
            "id": "sub-address-82",
            "address_id": "address-8",
            "name": "Ciaruteun Udik"
        },
        {
            "id": "sub-address-83",
            "address_id": "address-8",
            "name": "Cibatok 1"
        },
        {
            "id": "sub-address-84",
            "address_id": "address-8",
            "name": "Cibatok 2"
        },
        {
            "id": "sub-address-85",
            "address_id": "address-8",
            "name": "Cijujung"
        },
        {
            "id": "sub-address-86",
            "address_id": "address-8",
            "name": "Cimanggu 1"
        },
        {
            "id": "sub-address-87",
            "address_id": "address-8",
            "name": "Cimanggu 2"
        },
        {
            "id": "sub-address-88",
            "address_id": "address-8",
            "name": "Dukuh"
        },
        {
            "id": "sub-address-89",
            "address_id": "address-8",
            "name": "Galuga"
        },
        {
            "id": "sub-address-90",
            "address_id": "address-8",
            "name": "Girimulya"
        },
        {
            "id": "sub-address-91",
            "address_id": "address-8",
            "name": "Leuweung Kolot"
        },
        {
            "id": "sub-address-92",
            "address_id": "address-8",
            "name": "Situ Ilir"
        },
        {
            "id": "sub-address-93",
            "address_id": "address-8",
            "name": "Situ Udik"
        },
        {
            "id": "sub-address-94",
            "address_id": "address-8",
            "name": "Sukamaju"
        },
        {
            "id": "sub-address-95",
            "address_id": "address-9",
            "name": "Ciadeg"
        },
        {
            "id": "sub-address-96",
            "address_id": "address-9",
            "name": "Ciburayut"
        },
        {
            "id": "sub-address-97",
            "address_id": "address-9",
            "name": "Ciburuy"
        },
        {
            "id": "sub-address-98",
            "address_id": "address-9",
            "name": "Cigombong"
        },
        {
            "id": "sub-address-99",
            "address_id": "address-9",
            "name": "Cisalada"
        },
        {
            "id": "sub-address-100",
            "address_id": "address-9",
            "name": "Pasirjaya"
        },
        {
            "id": "sub-address-101",
            "address_id": "address-9",
            "name": "Srogol"
        },
        {
            "id": "sub-address-102",
            "address_id": "address-9",
            "name": "Tugujaya"
        },
        {
            "id": "sub-address-103",
            "address_id": "address-9",
            "name": "Watesjaya"
        },
        {
            "id": "sub-address-104",
            "address_id": "address-10",
            "name": "Argapura"
        },
        {
            "id": "sub-address-105",
            "address_id": "address-10",
            "name": "Bangunjaya"
        },
        {
            "id": "sub-address-106",
            "address_id": "address-10",
            "name": "Banyu Asih"
        },
        {
            "id": "sub-address-107",
            "address_id": "address-10",
            "name": "Banyu Resmi"
        },
        {
            "id": "sub-address-108",
            "address_id": "address-10",
            "name": "Banyu Wangi"
        },
        {
            "id": "sub-address-109",
            "address_id": "address-10",
            "name": "Batu Jajar"
        },
        {
            "id": "sub-address-110",
            "address_id": "address-10",
            "name": "Bunar"
        },
        {
            "id": "sub-address-111",
            "address_id": "address-10",
            "name": "Cigudeg"
        },
        {
            "id": "sub-address-112",
            "address_id": "address-10",
            "name": "Cintamanik"
        },
        {
            "id": "sub-address-113",
            "address_id": "address-10",
            "name": "Mekarjaya"
        },
        {
            "id": "sub-address-114",
            "address_id": "address-10",
            "name": "Rengasjajar"
        },
        {
            "id": "sub-address-115",
            "address_id": "address-10",
            "name": "Sukamaju"
        },
        {
            "id": "sub-address-116",
            "address_id": "address-10",
            "name": "Sukaraksa"
        },
        {
            "id": "sub-address-117",
            "address_id": "address-10",
            "name": "Tegalega"
        },
        {
            "id": "sub-address-118",
            "address_id": "address-10",
            "name": "Wargajaya"
        },
        {
            "id": "sub-address-119",
            "address_id": "address-11",
            "name": "Cibalung"
        },
        {
            "id": "sub-address-120",
            "address_id": "address-11",
            "name": "Cijeruk"
        },
        {
            "id": "sub-address-121",
            "address_id": "address-11",
            "name": "Cipelang"
        },
        {
            "id": "sub-address-122",
            "address_id": "address-11",
            "name": "Cipicung"
        },
        {
            "id": "sub-address-123",
            "address_id": "address-11",
            "name": "Palasari"
        },
        {
            "id": "sub-address-124",
            "address_id": "address-11",
            "name": "Sukaharja"
        },
        {
            "id": "sub-address-125",
            "address_id": "address-11",
            "name": "Tajur Halang"
        },
        {
            "id": "sub-address-126",
            "address_id": "address-11",
            "name": "Tanjung Sari"
        },
        {
            "id": "sub-address-127",
            "address_id": "address-11",
            "name": "Warung Menteng"
        },
        {
            "id": "sub-address-128",
            "address_id": "address-12",
            "name": "Cileungsi"
        },
        {
            "id": "sub-address-129",
            "address_id": "address-12",
            "name": "Cileungsi Kidul"
        },
        {
            "id": "sub-address-130",
            "address_id": "address-12",
            "name": "Cipenjo"
        },
        {
            "id": "sub-address-131",
            "address_id": "address-12",
            "name": "Cipeucang"
        },
        {
            "id": "sub-address-132",
            "address_id": "address-12",
            "name": "Dayeuh"
        },
        {
            "id": "sub-address-133",
            "address_id": "address-12",
            "name": "Gandoang"
        },
        {
            "id": "sub-address-134",
            "address_id": "address-12",
            "name": "Jatisari"
        },
        {
            "id": "sub-address-135",
            "address_id": "address-12",
            "name": "Limus Nunggal"
        },
        {
            "id": "sub-address-136",
            "address_id": "address-12",
            "name": "Mampir "
        },
        {
            "id": "sub-address-137",
            "address_id": "address-12",
            "name": "Mekarsari "
        },
        {
            "id": "sub-address-138",
            "address_id": "address-12",
            "name": "Pasir Angin "
        },
        {
            "id": "sub-address-139",
            "address_id": "address-12",
            "name": "Setu Sari "
        },
        {
            "id": "sub-address-140",
            "address_id": "address-13",
            "name": "Ciapus "
        },
        {
            "id": "sub-address-141",
            "address_id": "address-13",
            "name": "Ciomas "
        },
        {
            "id": "sub-address-142",
            "address_id": "address-13",
            "name": "Ciomas Rahayu "
        },
        {
            "id": "sub-address-143",
            "address_id": "address-13",
            "name": "Kota Batu "
        },
        {
            "id": "sub-address-144",
            "address_id": "address-13",
            "name": "Laladon"
        },
        {
            "id": "sub-address-145",
            "address_id": "address-13",
            "name": "Mekarjaya "
        },
        {
            "id": "sub-address-146",
            "address_id": "address-13",
            "name": "Pagelaran "
        },
        {
            "id": "sub-address-147",
            "address_id": "address-13",
            "name": "Parakan "
        },
        {
            "id": "sub-address-148",
            "address_id": "address-13",
            "name": "Sukaharja "
        },
        {
            "id": "sub-address-149",
            "address_id": "address-13",
            "name": "Sukamakmur "
        },
        {
            "id": "sub-address-150",
            "address_id": "address-13",
            "name": "Padasuka "
        },
        {
            "id": "sub-address-151",
            "address_id": "address-14",
            "name": "Batu Layang "
        },
        {
            "id": "sub-address-152",
            "address_id": "address-14",
            "name": "Cibeureum "
        },
        {
            "id": "sub-address-153",
            "address_id": "address-14",
            "name": "Cilember "
        },
        {
            "id": "sub-address-154",
            "address_id": "address-14",
            "name": "Citeko "
        },
        {
            "id": "sub-address-155",
            "address_id": "address-14",
            "name": "Jogjogan "
        },
        {
            "id": "sub-address-156",
            "address_id": "address-14",
            "name": "Kopo "
        },
        {
            "id": "sub-address-157",
            "address_id": "address-14",
            "name": "Leuwimalang "
        },
        {
            "id": "sub-address-158",
            "address_id": "address-14",
            "name": "Tugu Selatan "
        },
        {
            "id": "sub-address-159",
            "address_id": "address-14",
            "name": "Tugu Utara "
        },
        {
            "id": "sub-address-160",
            "address_id": "address-14",
            "name": "Cisarua "
        },
        {
            "id": "sub-address-161",
            "address_id": "address-15",
            "name": "Babakan "
        },
        {
            "id": "sub-address-162",
            "address_id": "address-15",
            "name": "Cibeuteung Muara "
        },
        {
            "id": "sub-address-163",
            "address_id": "address-15",
            "name": "Cibeuteung Udik "
        },
        {
            "id": "sub-address-164",
            "address_id": "address-15",
            "name": "Cibentang "
        },
        {
            "id": "sub-address-165",
            "address_id": "address-15",
            "name": "Cihoe "
        },
        {
            "id": "sub-address-166",
            "address_id": "address-15",
            "name": "Ciseeng "
        },
        {
            "id": "sub-address-167",
            "address_id": "address-15",
            "name": "Karihkil"
        },
        {
            "id": "sub-address-168",
            "address_id": "address-15",
            "name": "Kuripan "
        },
        {
            "id": "sub-address-169",
            "address_id": "address-15",
            "name": "Parigi Mekar "
        },
        {
            "id": "sub-address-170",
            "address_id": "address-15",
            "name": "Putat Nutug "
        },
        {
            "id": "sub-address-171",
            "address_id": "address-16",
            "name": "Citeureup "
        },
        {
            "id": "sub-address-172",
            "address_id": "address-16",
            "name": "Gunung Sari "
        },
        {
            "id": "sub-address-173",
            "address_id": "address-16",
            "name": "Hambalang "
        },
        {
            "id": "sub-address-174",
            "address_id": "address-16",
            "name": "Karang Asem Timur "
        },
        {
            "id": "sub-address-175",
            "address_id": "address-16",
            "name": "Leuwinutug "
        },
        {
            "id": "sub-address-176",
            "address_id": "address-16",
            "name": "Pasir Mukti "
        },
        {
            "id": "sub-address-177",
            "address_id": "address-16",
            "name": "Puspasari "
        },
        {
            "id": "sub-address-178",
            "address_id": "address-16",
            "name": "Sanja "
        },
        {
            "id": "sub-address-179",
            "address_id": "address-16",
            "name": "Sukahati "
        },
        {
            "id": "sub-address-180",
            "address_id": "address-16",
            "name": "Tajur "
        },
        {
            "id": "sub-address-181",
            "address_id": "address-16",
            "name": "Tangkil "
        },
        {
            "id": "sub-address-182",
            "address_id": "address-16",
            "name": "Tarikolot "
        },
        {
            "id": "sub-address-183",
            "address_id": "address-16",
            "name": "Karang Asem Barat "
        },
        {
            "id": "sub-address-184",
            "address_id": "address-16",
            "name": "Puspanegara "
        },
        {
            "id": "sub-address-185",
            "address_id": "address-17",
            "name": "Babakan "
        },
        {
            "id": "sub-address-186",
            "address_id": "address-17",
            "name": "Ciherang "
        },
        {
            "id": "sub-address-187",
            "address_id": "address-17",
            "name": "Cikarawang "
        },
        {
            "id": "sub-address-188",
            "address_id": "address-17",
            "name": "Dramaga "
        },
        {
            "id": "sub-address-189",
            "address_id": "address-17",
            "name": "Neglasari "
        },
        {
            "id": "sub-address-190",
            "address_id": "address-17",
            "name": "Petir "
        },
        {
            "id": "sub-address-191",
            "address_id": "address-17",
            "name": "Purwasarii "
        },
        {
            "id": "sub-address-192",
            "address_id": "address-17",
            "name": "Sinar Sari "
        },
        {
            "id": "sub-address-193",
            "address_id": "address-17",
            "name": "Sukadamai "
        },
        {
            "id": "sub-address-194",
            "address_id": "address-17",
            "name": "Sukawening "
        },
        {
            "id": "sub-address-195",
            "address_id": "address-18",
            "name": "Bojong Kulur "
        },
        {
            "id": "sub-address-196",
            "address_id": "address-18",
            "name": "Bojong Nangka "
        },
        {
            "id": "sub-address-197",
            "address_id": "address-18",
            "name": "Ciangsana "
        },
        {
            "id": "sub-address-198",
            "address_id": "address-18",
            "name": "Cicadas "
        },
        {
            "id": "sub-address-199",
            "address_id": "address-18",
            "name": "Cikeas Udik "
        },
        {
            "id": "sub-address-200",
            "address_id": "address-18",
            "name": "Gunung Putri "
        },
        {
            "id": "sub-address-201",
            "address_id": "address-18",
            "name": "Karanggan "
        },
        {
            "id": "sub-address-202",
            "address_id": "address-18",
            "name": "Nagrak "
        },
        {
            "id": "sub-address-203",
            "address_id": "address-18",
            "name": "Tlajung Udik "
        },
        {
            "id": "sub-address-204",
            "address_id": "address-18",
            "name": "Wanaherang "
        },
        {
            "id": "sub-address-205",
            "address_id": "address-19",
            "name": "Cibadung "
        },
        {
            "id": "sub-address-206",
            "address_id": "address-19",
            "name": "Cibinong "
        },
        {
            "id": "sub-address-207",
            "address_id": "address-19",
            "name": "Cidokom "
        },
        {
            "id": "sub-address-208",
            "address_id": "address-19",
            "name": "Curug "
        },
        {
            "id": "sub-address-209",
            "address_id": "address-19",
            "name": "Gunungsindur "
        },
        {
            "id": "sub-address-210",
            "address_id": "address-19",
            "name": "Jampang "
        },
        {
            "id": "sub-address-211",
            "address_id": "address-19",
            "name": "Pabuaran "
        },
        {
            "id": "sub-address-212",
            "address_id": "address-19",
            "name": "Padurenan "
        },
        {
            "id": "sub-address-213",
            "address_id": "address-19",
            "name": "Pengasinan "
        },
        {
            "id": "sub-address-214",
            "address_id": "address-19",
            "name": "Rawakalong "
        },
        {
            "id": "sub-address-215",
            "address_id": "address-20",
            "name": "Bagoang "
        },
        {
            "id": "sub-address-216",
            "address_id": "address-20",
            "name": "Barengkok "
        },
        {
            "id": "sub-address-217",
            "address_id": "address-20",
            "name": "Cikopomayak "
        },
        {
            "id": "sub-address-218",
            "address_id": "address-20",
            "name": "Curug "
        },
        {
            "id": "sub-address-219",
            "address_id": "address-20",
            "name": "Jasinga "
        },
        {
            "id": "sub-address-220",
            "address_id": "address-20",
            "name": "Jugala Jaya "
        },
        {
            "id": "sub-address-221",
            "address_id": "address-20",
            "name": "Kalongsawah "
        },
        {
            "id": "sub-address-222",
            "address_id": "address-20",
            "name": "Koleang "
        },
        {
            "id": "sub-address-223",
            "address_id": "address-20",
            "name": "Neglasari "
        },
        {
            "id": "sub-address-224",
            "address_id": "address-20",
            "name": "Pamagersari "
        },
        {
            "id": "sub-address-225",
            "address_id": "address-20",
            "name": "Pangaur "
        },
        {
            "id": "sub-address-226",
            "address_id": "address-20",
            "name": "Pangradin "
        },
        {
            "id": "sub-address-227",
            "address_id": "address-20",
            "name": "Sipak"
        },
        {
            "id": "sub-address-228",
            "address_id": "address-20",
            "name": "Setu"
        },
        {
            "id": "sub-address-229",
            "address_id": "address-20",
            "name": "Tegal Wangi "
        },
        {
            "id": "sub-address-230",
            "address_id": "address-20",
            "name": "Wirajaya "
        },
        {
            "id": "sub-address-231",
            "address_id": "address-21",
            "name": "Balekambang "
        },
        {
            "id": "sub-address-232",
            "address_id": "address-21",
            "name": "Bendungan "
        },
        {
            "id": "sub-address-233",
            "address_id": "address-21",
            "name": "Cibodas "
        },
        {
            "id": "sub-address-234",
            "address_id": "address-21",
            "name": "Jonggol "
        },
        {
            "id": "sub-address-235",
            "address_id": "address-21",
            "name": "Singajaya "
        },
        {
            "id": "sub-address-236",
            "address_id": "address-21",
            "name": "Singasari "
        },
        {
            "id": "sub-address-237",
            "address_id": "address-21",
            "name": "Sirnagalih "
        },
        {
            "id": "sub-address-238",
            "address_id": "address-21",
            "name": "Sukagalih "
        },
        {
            "id": "sub-address-239",
            "address_id": "address-21",
            "name": "Sukajaya "
        },
        {
            "id": "sub-address-240",
            "address_id": "address-21",
            "name": "Sukamaju "
        },
        {
            "id": "sub-address-241",
            "address_id": "address-21",
            "name": "Sukamanah "
        },
        {
            "id": "sub-address-242",
            "address_id": "address-21",
            "name": "Sukanegara "
        },
        {
            "id": "sub-address-243",
            "address_id": "address-21",
            "name": "Sukasirna "
        },
        {
            "id": "sub-address-244",
            "address_id": "address-21",
            "name": "Weninggalih "
        },
        {
            "id": "sub-address-245",
            "address_id": "address-22",
            "name": "Bojong "
        },
        {
            "id": "sub-address-246",
            "address_id": "address-22",
            "name": "Jampang "
        },
        {
            "id": "sub-address-247",
            "address_id": "address-22",
            "name": "Kemang "
        },
        {
            "id": "sub-address-248",
            "address_id": "address-22",
            "name": "Pabuaran"
        },
        {
            "id": "sub-address-249",
            "address_id": "address-22",
            "name": "Parakan Jaya "
        },
        {
            "id": "sub-address-250",
            "address_id": "address-22",
            "name": "Pondok Udik "
        },
        {
            "id": "sub-address-251",
            "address_id": "address-22",
            "name": "Semplak Barat "
        },
        {
            "id": "sub-address-252",
            "address_id": "address-22",
            "name": "Tegal "
        },
        {
            "id": "sub-address-253",
            "address_id": "address-22",
            "name": "Atang Senjaya "
        },
        {
            "id": "sub-address-254",
            "address_id": "address-23",
            "name": "Bantar Jati "
        },
        {
            "id": "sub-address-255",
            "address_id": "address-23",
            "name": "Bojong "
        },
        {
            "id": "sub-address-256",
            "address_id": "address-23",
            "name": "Cikahuripan "
        },
        {
            "id": "sub-address-257",
            "address_id": "address-23",
            "name": "Kembang Kuning "
        },
        {
            "id": "sub-address-258",
            "address_id": "address-23",
            "name": "Klapanunggal "
        },
        {
            "id": "sub-address-259",
            "address_id": "address-23",
            "name": "Leuwikaret "
        },
        {
            "id": "sub-address-260",
            "address_id": "address-23",
            "name": "Ligarmukti "
        },
        {
            "id": "sub-address-261",
            "address_id": "address-23",
            "name": "Lulut "
        },
        {
            "id": "sub-address-262",
            "address_id": "address-23",
            "name": "Nambo "
        },
        {
            "id": "sub-address-263",
            "address_id": "address-24",
            "name": "Barengkok "
        },
        {
            "id": "sub-address-264",
            "address_id": "address-24",
            "name": "Cibeber I "
        },
        {
            "id": "sub-address-265",
            "address_id": "address-24",
            "name": "Cibeber II "
        },
        {
            "id": "sub-address-266",
            "address_id": "address-24",
            "name": "Karacak "
        },
        {
            "id": "sub-address-267",
            "address_id": "address-24",
            "name": "Karyasari "
        },
        {
            "id": "sub-address-268",
            "address_id": "address-24",
            "name": "Karehkel "
        },
        {
            "id": "sub-address-269",
            "address_id": "address-24",
            "name": "Leuwiliang "
        },
        {
            "id": "sub-address-270",
            "address_id": "address-24",
            "name": "Leuwimekar "
        },
        {
            "id": "sub-address-271",
            "address_id": "address-24",
            "name": "Pabangbon "
        },
        {
            "id": "sub-address-272",
            "address_id": "address-24",
            "name": "Purasari "
        },
        {
            "id": "sub-address-273",
            "address_id": "address-24",
            "name": "Puraseda "
        },
        {
            "id": "sub-address-274",
            "address_id": "address-25",
            "name": "Babakan Sadeng "
        },
        {
            "id": "sub-address-275",
            "address_id": "address-25",
            "name": "Kalong I "
        },
        {
            "id": "sub-address-276",
            "address_id": "address-25",
            "name": "Kalong II "
        },
        {
            "id": "sub-address-277",
            "address_id": "address-25",
            "name": "Leuwisadeng "
        },
        {
            "id": "sub-address-278",
            "address_id": "address-25",
            "name": "Sadeng "
        },
        {
            "id": "sub-address-279",
            "address_id": "address-25",
            "name": "Sadengkolot "
        },
        {
            "id": "sub-address-280",
            "address_id": "address-25",
            "name": "Sibanteng "
        },
        {
            "id": "sub-address-281",
            "address_id": "address-25",
            "name": "Wangun Jaya "
        },
        {
            "id": "sub-address-282",
            "address_id": "address-26",
            "name": "Cipayung Datar"
        },
        {
            "id": "sub-address-283",
            "address_id": "address-26",
            "name": "Cipayung Girang "
        },
        {
            "id": "sub-address-284",
            "address_id": "address-26",
            "name": "Gadog "
        },
        {
            "id": "sub-address-285",
            "address_id": "address-26",
            "name": "Kuta "
        },
        {
            "id": "sub-address-286",
            "address_id": "address-26",
            "name": "Megamendung "
        },
        {
            "id": "sub-address-287",
            "address_id": "address-26",
            "name": "Pasir Angin "
        },
        {
            "id": "sub-address-288",
            "address_id": "address-26",
            "name": "Sukagalih "
        },
        {
            "id": "sub-address-289",
            "address_id": "address-26",
            "name": "Sukakarya "
        },
        {
            "id": "sub-address-290",
            "address_id": "address-26",
            "name": "Sukamahi "
        },
        {
            "id": "sub-address-291",
            "address_id": "address-26",
            "name": "Sukamaju "
        },
        {
            "id": "sub-address-292",
            "address_id": "address-26",
            "name": "Sukamanah "
        },
        {
            "id": "sub-address-293",
            "address_id": "address-26",
            "name": "Sukaresmi "
        },
        {
            "id": "sub-address-294",
            "address_id": "address-27",
            "name": "Bantar Karet "
        },
        {
            "id": "sub-address-295",
            "address_id": "address-27",
            "name": "Batu Tulis "
        },
        {
            "id": "sub-address-296",
            "address_id": "address-27",
            "name": "Cisarua "
        },
        {
            "id": "sub-address-297",
            "address_id": "address-27",
            "name": "Curug Bitung "
        },
        {
            "id": "sub-address-298",
            "address_id": "address-27",
            "name": "Hambaro "
        },
        {
            "id": "sub-address-299",
            "address_id": "address-27",
            "name": "Kalong Liud "
        },
        {
            "id": "sub-address-300",
            "address_id": "address-27",
            "name": "Malasari "
        },
        {
            "id": "sub-address-301",
            "address_id": "address-27",
            "name": "Nanggung "
        },
        {
            "id": "sub-address-302",
            "address_id": "address-27",
            "name": "Pangkal Jaya "
        },
        {
            "id": "sub-address-303",
            "address_id": "address-27",
            "name": "Parakan Muncang "
        },
        {
            "id": "sub-address-304",
            "address_id": "address-27",
            "name": "Sukaluyu "
        },
        {
            "id": "sub-address-305",
            "address_id": "address-28",
            "name": "Ciasihan "
        },
        {
            "id": "sub-address-306",
            "address_id": "address-28",
            "name": "Ciasmara "
        },
        {
            "id": "sub-address-307",
            "address_id": "address-28",
            "name": "Cibening "
        },
        {
            "id": "sub-address-308",
            "address_id": "address-28",
            "name": "Cibitung Kulon "
        },
        {
            "id": "sub-address-309",
            "address_id": "address-28",
            "name": "Cibitung Wetan "
        },
        {
            "id": "sub-address-310",
            "address_id": "address-28",
            "name": "Cibunian "
        },
        {
            "id": "sub-address-311",
            "address_id": "address-28",
            "name": "Cimayang "
        },
        {
            "id": "sub-address-312",
            "address_id": "address-28",
            "name": "Gunung Bunder "
        },
        {
            "id": "sub-address-313",
            "address_id": "address-28",
            "name": "Gunung Bunder II "
        },
        {
            "id": "sub-address-314",
            "address_id": "address-28",
            "name": "Gunung Menyan "
        },
        {
            "id": "sub-address-315",
            "address_id": "address-28",
            "name": "Gunung Picung "
        },
        {
            "id": "sub-address-316",
            "address_id": "address-28",
            "name": "Gunung Sari "
        },
        {
            "id": "sub-address-317",
            "address_id": "address-28",
            "name": "Pamijahan "
        },
        {
            "id": "sub-address-318",
            "address_id": "address-28",
            "name": "Pasarean "
        },
        {
            "id": "sub-address-319",
            "address_id": "address-28",
            "name": "Purwabakti "
        },
        {
            "id": "sub-address-320",
            "address_id": "address-29",
            "name": "Bojong Indah "
        },
        {
            "id": "sub-address-321",
            "address_id": "address-29",
            "name": "Bojong Sempu "
        },
        {
            "id": "sub-address-322",
            "address_id": "address-29",
            "name": "Cogreg "
        },
        {
            "id": "sub-address-323",
            "address_id": "address-29",
            "name": "Iwul "
        },
        {
            "id": "sub-address-324",
            "address_id": "address-29",
            "name": "Jabon Mekar "
        },
        {
            "id": "sub-address-325",
            "address_id": "address-29",
            "name": "Pamegarsari "
        },
        {
            "id": "sub-address-326",
            "address_id": "address-29",
            "name": "Parung "
        },
        {
            "id": "sub-address-327",
            "address_id": "address-29",
            "name": "Waru "
        },
        {
            "id": "sub-address-328",
            "address_id": "address-29",
            "name": "Warujaya "
        },
        {
            "id": "sub-address-329",
            "address_id": "address-30",
            "name": "Cibunar "
        },
        {
            "id": "sub-address-330",
            "address_id": "address-30",
            "name": "Cikuda "
        },
        {
            "id": "sub-address-331",
            "address_id": "address-30",
            "name": "Dago "
        },
        {
            "id": "sub-address-332",
            "address_id": "address-30",
            "name": "Gintung Cilejet"
        },
        {
            "id": "sub-address-333",
            "address_id": "address-30",
            "name": "Gorowong "
        },
        {
            "id": "sub-address-334",
            "address_id": "address-30",
            "name": "Jagabaya "
        },
        {
            "id": "sub-address-335",
            "address_id": "address-30",
            "name": "Jagabita "
        },
        {
            "id": "sub-address-336",
            "address_id": "address-30",
            "name": "Kabasiran "
        },
        {
            "id": "sub-address-337",
            "address_id": "address-30",
            "name": "Lumpang "
        },
        {
            "id": "sub-address-338",
            "address_id": "address-30",
            "name": "Parungpanjang "
        },
        {
            "id": "sub-address-339",
            "address_id": "address-30",
            "name": "Pingku  "
        },
        {
            "id": "sub-address-340",
            "address_id": "address-31",
            "name": "Bantarjaya "
        },
        {
            "id": "sub-address-341",
            "address_id": "address-31",
            "name": "Bantarsari "
        },
        {
            "id": "sub-address-342",
            "address_id": "address-31",
            "name": "Candali "
        },
        {
            "id": "sub-address-343",
            "address_id": "address-31",
            "name": "Cimulang "
        },
        {
            "id": "sub-address-344",
            "address_id": "address-31",
            "name": "Mekarsari "
        },
        {
            "id": "sub-address-345",
            "address_id": "address-31",
            "name": "Pasirgaok "
        },
        {
            "id": "sub-address-346",
            "address_id": "address-31",
            "name": "Rancabungur "
        },
        {
            "id": "sub-address-347",
            "address_id": "address-32",
            "name": "Cibodas "
        },
        {
            "id": "sub-address-348",
            "address_id": "address-32",
            "name": "Cidokom "
        },
        {
            "id": "sub-address-349",
            "address_id": "address-32",
            "name": "Cipinang "
        },
        {
            "id": "sub-address-350",
            "address_id": "address-32",
            "name": "Gobang "
        },
        {
            "id": "sub-address-351",
            "address_id": "address-32",
            "name": "Kampung Sawah "
        },
        {
            "id": "sub-address-352",
            "address_id": "address-32",
            "name": "Kertajaya "
        },
        {
            "id": "sub-address-353",
            "address_id": "address-32",
            "name": "Leuwibatu "
        },
        {
            "id": "sub-address-354",
            "address_id": "address-32",
            "name": "Mekar Jaya "
        },
        {
            "id": "sub-address-355",
            "address_id": "address-32",
            "name": "Mekar Sari "
        },
        {
            "id": "sub-address-356",
            "address_id": "address-32",
            "name": "Rabak "
        },
        {
            "id": "sub-address-357",
            "address_id": "address-32",
            "name": "Rumpin "
        },
        {
            "id": "sub-address-358",
            "address_id": "address-32",
            "name": "Sukamulya "
        },
        {
            "id": "sub-address-359",
            "address_id": "address-32",
            "name": "Sukasari "
        },
        {
            "id": "sub-address-360",
            "address_id": "address-32",
            "name": "Taman Sari "
        },
        {
            "id": "sub-address-361",
            "address_id": "address-33",
            "name": "Cileuksa "
        },
        {
            "id": "sub-address-362",
            "address_id": "address-33",
            "name": "Cisarua "
        },
        {
            "id": "sub-address-363",
            "address_id": "address-33",
            "name": "Harkatjaya "
        },
        {
            "id": "sub-address-364",
            "address_id": "address-33",
            "name": "Kiarapandak "
        },
        {
            "id": "sub-address-365",
            "address_id": "address-33",
            "name": "Kiarasari "
        },
        {
            "id": "sub-address-366",
            "address_id": "address-33",
            "name": "Pasir Madang "
        },
        {
            "id": "sub-address-367",
            "address_id": "address-33",
            "name": "Sipayung "
        },
        {
            "id": "sub-address-368",
            "address_id": "address-33",
            "name": "Sukaraja "
        },
        {
            "id": "sub-address-369",
            "address_id": "address-33",
            "name": "Sukamulih "
        },
        {
            "id": "sub-address-370",
            "address_id": "address-33",
            "name": "Jaya Raharja "
        },
        {
            "id": "sub-address-371",
            "address_id": "address-33",
            "name": "Urug "
        },
        {
            "id": "sub-address-372",
            "address_id": "address-34",
            "name": "Cibadak "
        },
        {
            "id": "sub-address-373",
            "address_id": "address-34",
            "name": "Pabuaran "
        },
        {
            "id": "sub-address-374",
            "address_id": "address-34",
            "name": "Sirnajaya "
        },
        {
            "id": "sub-address-375",
            "address_id": "address-34",
            "name": "Sukadamai "
        },
        {
            "id": "sub-address-376",
            "address_id": "address-34",
            "name": "Sukaharja "
        },
        {
            "id": "sub-address-377",
            "address_id": "address-34",
            "name": "Sukamakmur "
        },
        {
            "id": "sub-address-378",
            "address_id": "address-34",
            "name": "Sukamulya "
        },
        {
            "id": "sub-address-379",
            "address_id": "address-34",
            "name": "Sukaresmi "
        },
        {
            "id": "sub-address-380",
            "address_id": "address-34",
            "name": "Sukawangi "
        },
        {
            "id": "sub-address-381",
            "address_id": "address-34",
            "name": "Wargajaya "
        },
        {
            "id": "sub-address-382",
            "address_id": "address-35",
            "name": "Cadas Ngampar"
        },
        {
            "id": "sub-address-383",
            "address_id": "address-35",
            "name": "Cibanon "
        },
        {
            "id": "sub-address-384",
            "address_id": "address-35",
            "name": "Cijujung "
        },
        {
            "id": "sub-address-385",
            "address_id": "address-35",
            "name": "Cikeas "
        },
        {
            "id": "sub-address-386",
            "address_id": "address-35",
            "name": "Cilebut Barat "
        },
        {
            "id": "sub-address-387",
            "address_id": "address-35",
            "name": "Cilebut Timur "
        },
        {
            "id": "sub-address-388",
            "address_id": "address-35",
            "name": "Cimandala "
        },
        {
            "id": "sub-address-389",
            "address_id": "address-35",
            "name": "Gunung Geulis "
        },
        {
            "id": "sub-address-390",
            "address_id": "address-35",
            "name": "Nagrak "
        },
        {
            "id": "sub-address-391",
            "address_id": "address-35",
            "name": "Pasir Jambu "
        },
        {
            "id": "sub-address-392",
            "address_id": "address-35",
            "name": "Pasirlaja "
        },
        {
            "id": "sub-address-393",
            "address_id": "address-35",
            "name": "Sukaraja "
        },
        {
            "id": "sub-address-394",
            "address_id": "address-35",
            "name": "Sukatani "
        },
        {
            "id": "sub-address-395",
            "address_id": "address-36",
            "name": "Citayam "
        },
        {
            "id": "sub-address-396",
            "address_id": "address-36",
            "name": "Kalisuren "
        },
        {
            "id": "sub-address-397",
            "address_id": "address-36",
            "name": "Nanggerang "
        },
        {
            "id": "sub-address-398",
            "address_id": "address-36",
            "name": "Sasak Panjang "
        },
        {
            "id": "sub-address-399",
            "address_id": "address-36",
            "name": "Sukmajaya "
        },
        {
            "id": "sub-address-400",
            "address_id": "address-36",
            "name": "Tajur Halang "
        },
        {
            "id": "sub-address-401",
            "address_id": "address-36",
            "name": "Tonjong "
        },
        {
            "id": "sub-address-402",
            "address_id": "address-37",
            "name": "Pasireurih "
        },
        {
            "id": "sub-address-403",
            "address_id": "address-37",
            "name": "Sirnagalih "
        },
        {
            "id": "sub-address-404",
            "address_id": "address-37",
            "name": "Sukajadi "
        },
        {
            "id": "sub-address-405",
            "address_id": "address-37",
            "name": "Sukajaya "
        },
        {
            "id": "sub-address-406",
            "address_id": "address-37",
            "name": "Sukaluyu "
        },
        {
            "id": "sub-address-407",
            "address_id": "address-37",
            "name": "Sukamantri "
        },
        {
            "id": "sub-address-408",
            "address_id": "address-37",
            "name": "Sukaresmi "
        },
        {
            "id": "sub-address-409",
            "address_id": "address-37",
            "name": "Tamansari "
        },
        {
            "id": "sub-address-410",
            "address_id": "address-38",
            "name": "Antajaya "
        },
        {
            "id": "sub-address-411",
            "address_id": "address-38",
            "name": "Buanajaya "
        },
        {
            "id": "sub-address-412",
            "address_id": "address-38",
            "name": "Cibadak "
        },
        {
            "id": "sub-address-413",
            "address_id": "address-38",
            "name": "Pasir Tanjung "
        },
        {
            "id": "sub-address-414",
            "address_id": "address-38",
            "name": "Selawangi "
        },
        {
            "id": "sub-address-415",
            "address_id": "address-38",
            "name": "Sirnarasa "
        },
        {
            "id": "sub-address-416",
            "address_id": "address-38",
            "name": "Sirnasari "
        },
        {
            "id": "sub-address-417",
            "address_id": "address-38",
            "name": "Sukarasa "
        },
        {
            "id": "sub-address-418",
            "address_id": "address-38",
            "name": "Tanjungrasa "
        },
        {
            "id": "sub-address-419",
            "address_id": "address-38",
            "name": "Tanjungsari "
        },
        {
            "id": "sub-address-420",
            "address_id": "address-39",
            "name": "Babakan "
        },
        {
            "id": "sub-address-421",
            "address_id": "address-39",
            "name": "Batok "
        },
        {
            "id": "sub-address-422",
            "address_id": "address-39",
            "name": "Bojong "
        },
        {
            "id": "sub-address-423",
            "address_id": "address-39",
            "name": "Cilaku "
        },
        {
            "id": "sub-address-424",
            "address_id": "address-39",
            "name": "Ciomas "
        },
        {
            "id": "sub-address-425",
            "address_id": "address-39",
            "name": "Singabangsa "
        },
        {
            "id": "sub-address-426",
            "address_id": "address-39",
            "name": "Singabraja "
        },
        {
            "id": "sub-address-427",
            "address_id": "address-39",
            "name": "Tapos "
        },
        {
            "id": "sub-address-428",
            "address_id": "address-39",
            "name": "Tenjo "
        },
        {
            "id": "sub-address-429",
            "address_id": "address-40",
            "name": "Cibitung Tengah "
        },
        {
            "id": "sub-address-430",
            "address_id": "address-40",
            "name": "Cinangneng "
        },
        {
            "id": "sub-address-431",
            "address_id": "address-40",
            "name": "Gunung Malang "
        },
        {
            "id": "sub-address-432",
            "address_id": "address-40",
            "name": "Gunung Mulya "
        },
        {
            "id": "sub-address-433",
            "address_id": "address-40",
            "name": "Situ Daun "
        },
        {
            "id": "sub-address-434",
            "address_id": "address-40",
            "name": "Tapos 1 "
        },
        {
            "id": "sub-address-435",
            "address_id": "address-40",
            "name": "Tapos 2"
        }
    ],
    "distance": [
        {
            "id": "distance-1",
            "school_id": "school-1",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-1"
        },
        {
            "id": "distance-2",
            "school_id": "school-2",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-12"
        },
        {
            "id": "distance-3",
            "school_id": "school-3",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-12"
        },
        {
            "id": "distance-4",
            "school_id": "school-4",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-24"
        },
        {
            "id": "distance-5",
            "school_id": "school-5",
            "priority_1": "zonation-2",
            "priority_2": "address-4",
            "priority_3": "sub-address-33"
        },
        {
            "id": "distance-6",
            "school_id": "school-6",
            "priority_1": "zonation-2",
            "priority_2": "address-4",
            "priority_3": "sub-address-31"
        },
        {
            "id": "distance-7",
            "school_id": "school-7",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-46"
        },
        {
            "id": "distance-8",
            "school_id": "school-8",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-56"
        },
        {
            "id": "distance-9",
            "school_id": "school-9",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-10",
            "school_id": "school-10",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-11",
            "school_id": "school-11",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-72"
        },
        {
            "id": "distance-12",
            "school_id": "school-12",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-67"
        },
        {
            "id": "distance-13",
            "school_id": "school-13",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-14",
            "school_id": "school-14",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-15",
            "school_id": "school-15",
            "priority_1": "zonation-3",
            "priority_2": "address-8",
            "priority_3": "sub-address-83"
        },
        {
            "id": "distance-16",
            "school_id": "school-16",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-103"
        },
        {
            "id": "distance-17",
            "school_id": "school-17",
            "priority_1": "zonation-3",
            "priority_2": "address-10",
            "priority_3": "sub-address-111"
        },
        {
            "id": "distance-18",
            "school_id": "school-18",
            "priority_1": "zonation-4",
            "priority_2": "address-11",
            "priority_3": "sub-address-120"
        },
        {
            "id": "distance-19",
            "school_id": "school-19",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-20",
            "school_id": "school-20",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-130"
        },
        {
            "id": "distance-21",
            "school_id": "school-21",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-135"
        },
        {
            "id": "distance-22",
            "school_id": "school-22",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-124"
        },
        {
            "id": "distance-23",
            "school_id": "school-23",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-144"
        },
        {
            "id": "distance-24",
            "school_id": "school-24",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-157"
        },
        {
            "id": "distance-25",
            "school_id": "school-25",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-158"
        },
        {
            "id": "distance-26",
            "school_id": "school-26",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-170"
        },
        {
            "id": "distance-27",
            "school_id": "school-27",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-182"
        },
        {
            "id": "distance-28",
            "school_id": "school-28",
            "priority_1": "zonation-4",
            "priority_2": "address-17",
            "priority_3": "sub-address-188"
        },
        {
            "id": "distance-29",
            "school_id": "school-29",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-209"
        },
        {
            "id": "distance-30",
            "school_id": "school-30",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-214"
        },
        {
            "id": "distance-31",
            "school_id": "school-31",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-196"
        },
        {
            "id": "distance-32",
            "school_id": "school-32",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-33",
            "school_id": "school-33",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-204"
        },
        {
            "id": "distance-34",
            "school_id": "school-34",
            "priority_1": "zonation-3",
            "priority_2": "address-20",
            "priority_3": "sub-address-228"
        },
        {
            "id": "distance-35",
            "school_id": "school-35",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-243"
        },
        {
            "id": "distance-36",
            "school_id": "school-36",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-234"
        },
        {
            "id": "distance-37",
            "school_id": "school-37",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-247"
        },
        {
            "id": "distance-38",
            "school_id": "school-38",
            "priority_1": "zonation-2",
            "priority_2": "address-23",
            "priority_3": "sub-address-258"
        },
        {
            "id": "distance-39",
            "school_id": "school-39",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-269"
        },
        {
            "id": "distance-40",
            "school_id": "school-40",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-270"
        },
        {
            "id": "distance-41",
            "school_id": "school-41",
            "priority_1": "zonation-3",
            "priority_2": "address-25",
            "priority_3": "sub-address-277"
        },
        {
            "id": "distance-42",
            "school_id": "school-42",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-94"
        },
        {
            "id": "distance-43",
            "school_id": "school-43",
            "priority_1": "zonation-3",
            "priority_2": "address-27",
            "priority_3": "sub-address-302"
        },
        {
            "id": "distance-44",
            "school_id": "school-44",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-172"
        },
        {
            "id": "distance-45",
            "school_id": "school-45",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-329"
        },
        {
            "id": "distance-46",
            "school_id": "school-46",
            "priority_1": "zonation-3",
            "priority_2": "address-30",
            "priority_3": "sub-address-336"
        },
        {
            "id": "distance-47",
            "school_id": "school-47",
            "priority_1": "zonation-5",
            "priority_2": "address-31",
            "priority_3": "sub-address-347"
        },
        {
            "id": "distance-48",
            "school_id": "school-48",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-359"
        },
        {
            "id": "distance-49",
            "school_id": "school-49",
            "priority_1": "zonation-3",
            "priority_2": "address-33",
            "priority_3": "sub-address-239"
        },
        {
            "id": "distance-50",
            "school_id": "school-50",
            "priority_1": "zonation-2",
            "priority_2": "address-34",
            "priority_3": "sub-address-360"
        },
        {
            "id": "distance-51",
            "school_id": "school-51",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-388"
        },
        {
            "id": "distance-52",
            "school_id": "school-52",
            "priority_1": "zonation-5",
            "priority_2": "address-36",
            "priority_3": "sub-address-125"
        },
        {
            "id": "distance-53",
            "school_id": "school-53",
            "priority_1": "zonation-4",
            "priority_2": "address-37",
            "priority_3": "sub-address-362"
        },
        {
            "id": "distance-54",
            "school_id": "school-54",
            "priority_1": "zonation-2",
            "priority_2": "address-38",
            "priority_3": "sub-address-413"
        },
        {
            "id": "distance-55",
            "school_id": "school-55",
            "priority_1": "zonation-3",
            "priority_2": "address-39",
            "priority_3": "sub-address-161"
        },
        {
            "id": "distance-56",
            "school_id": "school-56",
            "priority_1": "zonation-4",
            "priority_2": "address-40",
            "priority_3": "sub-address-437"
        },
        {
            "id": "distance-57",
            "school_id": "school-57",
            "priority_1": "zonation-all",
            "priority_2": "address-7",
            "priority_3": "sub-address-68"
        },
        {
            "id": "distance-58",
            "school_id": "school-58",
            "priority_1": "zonation-all",
            "priority_2": "address-25",
            "priority_3": "sub-address-280"
        },
        {
            "id": "distance-59",
            "school_id": "school-59",
            "priority_1": "zonation-all",
            "priority_2": "address-21",
            "priority_3": "sub-address-94"
        },
        {
            "id": "distance-60",
            "school_id": "school-60",
            "priority_1": "zonation-all",
            "priority_2": "address-9",
            "priority_3": "sub-address-99"
        },
        {
            "id": "distance-61",
            "school_id": "school-61",
            "priority_1": "zonation-all",
            "priority_2": "address-30",
            "priority_3": "sub-address-330"
        },
        {
            "id": "distance-62",
            "school_id": "school-62",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-8"
        },
        {
            "id": "distance-63",
            "school_id": "school-63",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-1"
        },
        {
            "id": "distance-64",
            "school_id": "school-64",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-5"
        },
        {
            "id": "distance-65",
            "school_id": "school-65",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-3"
        },
        {
            "id": "distance-66",
            "school_id": "school-66",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-6"
        },
        {
            "id": "distance-67",
            "school_id": "school-67",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-1"
        },
        {
            "id": "distance-68",
            "school_id": "school-68",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-3"
        },
        {
            "id": "distance-69",
            "school_id": "school-69",
            "priority_1": "zonation-1",
            "priority_2": "address-1",
            "priority_3": "sub-address-3"
        },
        {
            "id": "distance-70",
            "school_id": "school-70",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-71",
            "school_id": "school-71",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-15"
        },
        {
            "id": "distance-72",
            "school_id": "school-72",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-73",
            "school_id": "school-73",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-74",
            "school_id": "school-74",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-75",
            "school_id": "school-75",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-11"
        },
        {
            "id": "distance-76",
            "school_id": "school-76",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-77",
            "school_id": "school-77",
            "priority_1": "zonation-5",
            "priority_2": "address-2",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-78",
            "school_id": "school-78",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-20"
        },
        {
            "id": "distance-79",
            "school_id": "school-79",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-26"
        },
        {
            "id": "distance-80",
            "school_id": "school-80",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-26"
        },
        {
            "id": "distance-81",
            "school_id": "school-81",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-26"
        },
        {
            "id": "distance-82",
            "school_id": "school-82",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-181"
        },
        {
            "id": "distance-83",
            "school_id": "school-83",
            "priority_1": "zonation-4",
            "priority_2": "address-3",
            "priority_3": "sub-address-28"
        },
        {
            "id": "distance-84",
            "school_id": "school-84",
            "priority_1": "zonation-2",
            "priority_2": "address-4",
            "priority_3": "sub-address-40"
        },
        {
            "id": "distance-85",
            "school_id": "school-85",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-47"
        },
        {
            "id": "distance-86",
            "school_id": "school-86",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-49"
        },
        {
            "id": "distance-87",
            "school_id": "school-87",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-50"
        },
        {
            "id": "distance-88",
            "school_id": "school-88",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-43"
        },
        {
            "id": "distance-89",
            "school_id": "school-89",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-43"
        },
        {
            "id": "distance-90",
            "school_id": "school-90",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-44"
        },
        {
            "id": "distance-91",
            "school_id": "school-91",
            "priority_1": "zonation-4",
            "priority_2": "address-5",
            "priority_3": "sub-address-47"
        },
        {
            "id": "distance-92",
            "school_id": "school-92",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-60"
        },
        {
            "id": "distance-93",
            "school_id": "school-93",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-54"
        },
        {
            "id": "distance-94",
            "school_id": "school-94",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-55"
        },
        {
            "id": "distance-95",
            "school_id": "school-95",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-96",
            "school_id": "school-96",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-60"
        },
        {
            "id": "distance-97",
            "school_id": "school-97",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-60"
        },
        {
            "id": "distance-98",
            "school_id": "school-98",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-66"
        },
        {
            "id": "distance-99",
            "school_id": "school-99",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-64"
        },
        {
            "id": "distance-100",
            "school_id": "school-100",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-58"
        },
        {
            "id": "distance-101",
            "school_id": "school-101",
            "priority_1": "zonation-4",
            "priority_2": "address-6",
            "priority_3": "sub-address-63"
        },
        {
            "id": "distance-102",
            "school_id": "school-102",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-79"
        },
        {
            "id": "distance-103",
            "school_id": "school-103",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-104",
            "school_id": "school-104",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-105",
            "school_id": "school-105",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-106",
            "school_id": "school-106",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-107",
            "school_id": "school-107",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-108",
            "school_id": "school-108",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-109",
            "school_id": "school-109",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-110",
            "school_id": "school-110",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-76"
        },
        {
            "id": "distance-111",
            "school_id": "school-111",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-112",
            "school_id": "school-112",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-113",
            "school_id": "school-113",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-78"
        },
        {
            "id": "distance-114",
            "school_id": "school-114",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-115",
            "school_id": "school-115",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-116",
            "school_id": "school-116",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-117",
            "school_id": "school-117",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-76"
        },
        {
            "id": "distance-118",
            "school_id": "school-118",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-119",
            "school_id": "school-119",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-120",
            "school_id": "school-120",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-121",
            "school_id": "school-121",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-122",
            "school_id": "school-122",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-69"
        },
        {
            "id": "distance-123",
            "school_id": "school-123",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-67"
        },
        {
            "id": "distance-124",
            "school_id": "school-124",
            "priority_1": "zonation-1",
            "priority_2": "address-7",
            "priority_3": "sub-address-71"
        },
        {
            "id": "distance-125",
            "school_id": "school-125",
            "priority_1": "zonation-1",
            "priority_2": "address-8",
            "priority_3": "sub-address-84"
        },
        {
            "id": "distance-126",
            "school_id": "school-126",
            "priority_1": "zonation-1",
            "priority_2": "address-8",
            "priority_3": "sub-address-90"
        },
        {
            "id": "distance-127",
            "school_id": "school-127",
            "priority_1": "zonation-1",
            "priority_2": "address-8",
            "priority_3": "sub-address-92"
        },
        {
            "id": "distance-128",
            "school_id": "school-128",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-100"
        },
        {
            "id": "distance-129",
            "school_id": "school-129",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-101"
        },
        {
            "id": "distance-130",
            "school_id": "school-130",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-98"
        },
        {
            "id": "distance-131",
            "school_id": "school-131",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-95"
        },
        {
            "id": "distance-132",
            "school_id": "school-132",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-96"
        },
        {
            "id": "distance-133",
            "school_id": "school-133",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-101"
        },
        {
            "id": "distance-134",
            "school_id": "school-134",
            "priority_1": "zonation-4",
            "priority_2": "address-9",
            "priority_3": "sub-address-97"
        },
        {
            "id": "distance-135",
            "school_id": "school-135",
            "priority_1": "zonation-3",
            "priority_2": "address-10",
            "priority_3": "sub-address-104"
        },
        {
            "id": "distance-136",
            "school_id": "school-136",
            "priority_1": "zonation-4",
            "priority_2": "address-11",
            "priority_3": "sub-address-127"
        },
        {
            "id": "distance-137",
            "school_id": "school-137",
            "priority_1": "zonation-4",
            "priority_2": "address-11",
            "priority_3": "sub-address-120"
        },
        {
            "id": "distance-138",
            "school_id": "school-138",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-130"
        },
        {
            "id": "distance-139",
            "school_id": "school-139",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-137"
        },
        {
            "id": "distance-140",
            "school_id": "school-140",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-134"
        },
        {
            "id": "distance-141",
            "school_id": "school-141",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-129"
        },
        {
            "id": "distance-142",
            "school_id": "school-142",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-136"
        },
        {
            "id": "distance-143",
            "school_id": "school-143",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-144",
            "school_id": "school-144",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-145",
            "school_id": "school-145",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-129"
        },
        {
            "id": "distance-146",
            "school_id": "school-146",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-147",
            "school_id": "school-147",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-148",
            "school_id": "school-148",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-129"
        },
        {
            "id": "distance-149",
            "school_id": "school-149",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-129"
        },
        {
            "id": "distance-150",
            "school_id": "school-150",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-132"
        },
        {
            "id": "distance-151",
            "school_id": "school-151",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-131"
        },
        {
            "id": "distance-152",
            "school_id": "school-152",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-135"
        },
        {
            "id": "distance-153",
            "school_id": "school-153",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-131"
        },
        {
            "id": "distance-154",
            "school_id": "school-154",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-131"
        },
        {
            "id": "distance-155",
            "school_id": "school-155",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-156",
            "school_id": "school-156",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-157",
            "school_id": "school-157",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-158",
            "school_id": "school-158",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-133"
        },
        {
            "id": "distance-159",
            "school_id": "school-159",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-136"
        },
        {
            "id": "distance-160",
            "school_id": "school-160",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-138"
        },
        {
            "id": "distance-161",
            "school_id": "school-161",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-62"
        },
        {
            "id": "distance-162",
            "school_id": "school-162",
            "priority_1": "zonation-2",
            "priority_2": "address-12",
            "priority_3": "sub-address-134"
        },
        {
            "id": "distance-163",
            "school_id": "school-163",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-144"
        },
        {
            "id": "distance-164",
            "school_id": "school-164",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-150"
        },
        {
            "id": "distance-165",
            "school_id": "school-165",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-144"
        },
        {
            "id": "distance-166",
            "school_id": "school-166",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-150"
        },
        {
            "id": "distance-167",
            "school_id": "school-167",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-143"
        },
        {
            "id": "distance-168",
            "school_id": "school-168",
            "priority_1": "zonation-4",
            "priority_2": "address-13",
            "priority_3": "sub-address-146"
        },
        {
            "id": "distance-169",
            "school_id": "school-169",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-156"
        },
        {
            "id": "distance-170",
            "school_id": "school-170",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-160"
        },
        {
            "id": "distance-171",
            "school_id": "school-171",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-157"
        },
        {
            "id": "distance-172",
            "school_id": "school-172",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-155"
        },
        {
            "id": "distance-173",
            "school_id": "school-173",
            "priority_1": "zonation-4",
            "priority_2": "address-14",
            "priority_3": "sub-address-155"
        },
        {
            "id": "distance-174",
            "school_id": "school-174",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-167"
        },
        {
            "id": "distance-175",
            "school_id": "school-175",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-161"
        },
        {
            "id": "distance-176",
            "school_id": "school-176",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-164"
        },
        {
            "id": "distance-177",
            "school_id": "school-177",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-161"
        },
        {
            "id": "distance-178",
            "school_id": "school-178",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-164"
        },
        {
            "id": "distance-179",
            "school_id": "school-179",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-163"
        },
        {
            "id": "distance-180",
            "school_id": "school-180",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-163"
        },
        {
            "id": "distance-181",
            "school_id": "school-181",
            "priority_1": "zonation-5",
            "priority_2": "address-15",
            "priority_3": "sub-address-166"
        },
        {
            "id": "distance-182",
            "school_id": "school-182",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-173"
        },
        {
            "id": "distance-183",
            "school_id": "school-183",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-184"
        },
        {
            "id": "distance-184",
            "school_id": "school-184",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-183"
        },
        {
            "id": "distance-185",
            "school_id": "school-185",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-183"
        },
        {
            "id": "distance-186",
            "school_id": "school-186",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-183"
        },
        {
            "id": "distance-187",
            "school_id": "school-187",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-171"
        },
        {
            "id": "distance-188",
            "school_id": "school-188",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-177"
        },
        {
            "id": "distance-189",
            "school_id": "school-189",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-177"
        },
        {
            "id": "distance-190",
            "school_id": "school-190",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-183"
        },
        {
            "id": "distance-191",
            "school_id": "school-191",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-183"
        },
        {
            "id": "distance-192",
            "school_id": "school-192",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-177"
        },
        {
            "id": "distance-193",
            "school_id": "school-193",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-180"
        },
        {
            "id": "distance-194",
            "school_id": "school-194",
            "priority_1": "zonation-1",
            "priority_2": "address-16",
            "priority_3": "sub-address-180"
        },
        {
            "id": "distance-195",
            "school_id": "school-195",
            "priority_1": "zonation-4",
            "priority_2": "address-17",
            "priority_3": "sub-address-161"
        },
        {
            "id": "distance-196",
            "school_id": "school-196",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-208"
        },
        {
            "id": "distance-197",
            "school_id": "school-197",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-198",
            "school_id": "school-198",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-18"
        },
        {
            "id": "distance-199",
            "school_id": "school-199",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-205"
        },
        {
            "id": "distance-200",
            "school_id": "school-200",
            "priority_1": "zonation-5",
            "priority_2": "address-19",
            "priority_3": "sub-address-214"
        },
        {
            "id": "distance-201",
            "school_id": "school-201",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-195"
        },
        {
            "id": "distance-202",
            "school_id": "school-202",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-200"
        },
        {
            "id": "distance-203",
            "school_id": "school-203",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-204",
            "school_id": "school-204",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-205",
            "school_id": "school-205",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-206",
            "school_id": "school-206",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-207",
            "school_id": "school-207",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-199"
        },
        {
            "id": "distance-208",
            "school_id": "school-208",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-209",
            "school_id": "school-209",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-195"
        },
        {
            "id": "distance-210",
            "school_id": "school-210",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-211",
            "school_id": "school-211",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-212",
            "school_id": "school-212",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-204"
        },
        {
            "id": "distance-213",
            "school_id": "school-213",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-214",
            "school_id": "school-214",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-195"
        },
        {
            "id": "distance-215",
            "school_id": "school-215",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-216",
            "school_id": "school-216",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-217",
            "school_id": "school-217",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-196"
        },
        {
            "id": "distance-218",
            "school_id": "school-218",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-219",
            "school_id": "school-219",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-199"
        },
        {
            "id": "distance-220",
            "school_id": "school-220",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-197"
        },
        {
            "id": "distance-221",
            "school_id": "school-221",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-195"
        },
        {
            "id": "distance-222",
            "school_id": "school-222",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-204"
        },
        {
            "id": "distance-223",
            "school_id": "school-223",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-201"
        },
        {
            "id": "distance-224",
            "school_id": "school-224",
            "priority_1": "zonation-2",
            "priority_2": "address-18",
            "priority_3": "sub-address-196"
        },
        {
            "id": "distance-225",
            "school_id": "school-225",
            "priority_1": "zonation-3",
            "priority_2": "address-20",
            "priority_3": "sub-address-221"
        },
        {
            "id": "distance-226",
            "school_id": "school-226",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-94"
        },
        {
            "id": "distance-227",
            "school_id": "school-227",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-94"
        },
        {
            "id": "distance-228",
            "school_id": "school-228",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-231"
        },
        {
            "id": "distance-229",
            "school_id": "school-229",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-231"
        },
        {
            "id": "distance-230",
            "school_id": "school-230",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-94"
        },
        {
            "id": "distance-231",
            "school_id": "school-231",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-235"
        },
        {
            "id": "distance-232",
            "school_id": "school-232",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-241"
        },
        {
            "id": "distance-233",
            "school_id": "school-233",
            "priority_1": "zonation-2",
            "priority_2": "address-21",
            "priority_3": "sub-address-242"
        },
        {
            "id": "distance-234",
            "school_id": "school-234",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-235",
            "school_id": "school-235",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-252"
        },
        {
            "id": "distance-236",
            "school_id": "school-236",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-252"
        },
        {
            "id": "distance-237",
            "school_id": "school-237",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-210"
        },
        {
            "id": "distance-238",
            "school_id": "school-238",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-239",
            "school_id": "school-239",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-250"
        },
        {
            "id": "distance-240",
            "school_id": "school-240",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-241",
            "school_id": "school-241",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-242",
            "school_id": "school-242",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-250"
        },
        {
            "id": "distance-243",
            "school_id": "school-243",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-253"
        },
        {
            "id": "distance-244",
            "school_id": "school-244",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-245",
            "school_id": "school-245",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-246",
            "school_id": "school-246",
            "priority_1": "zonation-5",
            "priority_2": "address-22",
            "priority_3": "sub-address-249"
        },
        {
            "id": "distance-247",
            "school_id": "school-247",
            "priority_1": "zonation-2",
            "priority_2": "address-23",
            "priority_3": "sub-address-257"
        },
        {
            "id": "distance-248",
            "school_id": "school-248",
            "priority_1": "zonation-2",
            "priority_2": "address-23",
            "priority_3": "sub-address-258"
        },
        {
            "id": "distance-249",
            "school_id": "school-249",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-272"
        },
        {
            "id": "distance-250",
            "school_id": "school-250",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-264"
        },
        {
            "id": "distance-251",
            "school_id": "school-251",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-216"
        },
        {
            "id": "distance-252",
            "school_id": "school-252",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-273"
        },
        {
            "id": "distance-253",
            "school_id": "school-253",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-265"
        },
        {
            "id": "distance-254",
            "school_id": "school-254",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-267"
        },
        {
            "id": "distance-255",
            "school_id": "school-255",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-264"
        },
        {
            "id": "distance-256",
            "school_id": "school-256",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-266"
        },
        {
            "id": "distance-257",
            "school_id": "school-257",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-269"
        },
        {
            "id": "distance-258",
            "school_id": "school-258",
            "priority_1": "zonation-3",
            "priority_2": "address-24",
            "priority_3": "sub-address-270"
        },
        {
            "id": "distance-259",
            "school_id": "school-259",
            "priority_1": "zonation-3",
            "priority_2": "address-25",
            "priority_3": "sub-address-277"
        },
        {
            "id": "distance-260",
            "school_id": "school-260",
            "priority_1": "zonation-3",
            "priority_2": "address-25",
            "priority_3": "sub-address-280"
        },
        {
            "id": "distance-261",
            "school_id": "school-261",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-286"
        },
        {
            "id": "distance-262",
            "school_id": "school-262",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-285"
        },
        {
            "id": "distance-263",
            "school_id": "school-263",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-287"
        },
        {
            "id": "distance-264",
            "school_id": "school-264",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-284"
        },
        {
            "id": "distance-265",
            "school_id": "school-265",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-282"
        },
        {
            "id": "distance-266",
            "school_id": "school-266",
            "priority_1": "zonation-4",
            "priority_2": "address-26",
            "priority_3": "sub-address-284"
        },
        {
            "id": "distance-267",
            "school_id": "school-267",
            "priority_1": "zonation-3",
            "priority_2": "address-27",
            "priority_3": "sub-address-304"
        },
        {
            "id": "distance-268",
            "school_id": "school-268",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-319"
        },
        {
            "id": "distance-269",
            "school_id": "school-269",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-307"
        },
        {
            "id": "distance-270",
            "school_id": "school-270",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-315"
        },
        {
            "id": "distance-271",
            "school_id": "school-271",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-318"
        },
        {
            "id": "distance-272",
            "school_id": "school-272",
            "priority_1": "zonation-3",
            "priority_2": "address-28",
            "priority_3": "sub-address-315"
        },
        {
            "id": "distance-273",
            "school_id": "school-273",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-224"
        },
        {
            "id": "distance-274",
            "school_id": "school-274",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-224"
        },
        {
            "id": "distance-275",
            "school_id": "school-275",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-329"
        },
        {
            "id": "distance-276",
            "school_id": "school-276",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-325"
        },
        {
            "id": "distance-277",
            "school_id": "school-277",
            "priority_1": "zonation-5",
            "priority_2": "address-29",
            "priority_3": "sub-address-325"
        },
        {
            "id": "distance-278",
            "school_id": "school-278",
            "priority_1": "zonation-3",
            "priority_2": "address-30",
            "priority_3": "sub-address-330"
        },
        {
            "id": "distance-279",
            "school_id": "school-279",
            "priority_1": "zonation-3",
            "priority_2": "address-30",
            "priority_3": "sub-address-338"
        },
        {
            "id": "distance-280",
            "school_id": "school-280",
            "priority_1": "zonation-3",
            "priority_2": "address-30",
            "priority_3": "sub-address-340"
        },
        {
            "id": "distance-281",
            "school_id": "school-281",
            "priority_1": "zonation-5",
            "priority_2": "address-31",
            "priority_3": "sub-address-342"
        },
        {
            "id": "distance-282",
            "school_id": "school-282",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-360"
        },
        {
            "id": "distance-283",
            "school_id": "school-283",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-360"
        },
        {
            "id": "distance-284",
            "school_id": "school-284",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-233"
        },
        {
            "id": "distance-285",
            "school_id": "school-285",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-353"
        },
        {
            "id": "distance-286",
            "school_id": "school-286",
            "priority_1": "zonation-5",
            "priority_2": "address-32",
            "priority_3": "sub-address-207"
        },
        {
            "id": "distance-287",
            "school_id": "school-287",
            "priority_1": "zonation-2",
            "priority_2": "address-34",
            "priority_3": "sub-address-382"
        },
        {
            "id": "distance-288",
            "school_id": "school-288",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-392"
        },
        {
            "id": "distance-289",
            "school_id": "school-289",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-202"
        },
        {
            "id": "distance-290",
            "school_id": "school-290",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-370"
        },
        {
            "id": "distance-291",
            "school_id": "school-291",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-85"
        },
        {
            "id": "distance-292",
            "school_id": "school-292",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-394"
        },
        {
            "id": "distance-293",
            "school_id": "school-293",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-391"
        },
        {
            "id": "distance-294",
            "school_id": "school-294",
            "priority_1": "zonation-1",
            "priority_2": "address-35",
            "priority_3": "sub-address-388"
        },
        {
            "id": "distance-295",
            "school_id": "school-295",
            "priority_1": "zonation-5",
            "priority_2": "address-36",
            "priority_3": "sub-address-398"
        },
        {
            "id": "distance-296",
            "school_id": "school-296",
            "priority_1": "zonation-5",
            "priority_2": "address-36",
            "priority_3": "sub-address-401"
        },
        {
            "id": "distance-297",
            "school_id": "school-297",
            "priority_1": "zonation-5",
            "priority_2": "address-36",
            "priority_3": "sub-address-401"
        },
        {
            "id": "distance-298",
            "school_id": "school-298",
            "priority_1": "zonation-5",
            "priority_2": "address-36",
            "priority_3": "sub-address-125"
        },
        {
            "id": "distance-299",
            "school_id": "school-299",
            "priority_1": "zonation-4",
            "priority_2": "address-37",
            "priority_3": "sub-address-410"
        },
        {
            "id": "distance-300",
            "school_id": "school-300",
            "priority_1": "zonation-4",
            "priority_2": "address-37",
            "priority_3": "sub-address-305"
        },
        {
            "id": "distance-301",
            "school_id": "school-301",
            "priority_1": "zonation-4",
            "priority_2": "address-37",
            "priority_3": "sub-address-410"
        },
        {
            "id": "distance-302",
            "school_id": "school-302",
            "priority_1": "zonation-4",
            "priority_2": "address-37",
            "priority_3": "sub-address-410"
        },
        {
            "id": "distance-303",
            "school_id": "school-303",
            "priority_1": "zonation-4",
            "priority_2": "address-38",
            "priority_3": "sub-address-416"
        },
        {
            "id": "distance-304",
            "school_id": "school-304",
            "priority_1": "zonation-3",
            "priority_2": "address-39",
            "priority_3": "sub-address-431"
        },
        {
            "id": "distance-305",
            "school_id": "school-305",
            "priority_1": "zonation-4",
            "priority_2": "address-40",
            "priority_3": "sub-address-435"
        },
        {
            "id": "distance-306",
            "school_id": "school-306",
            "priority_1": "zonation-4",
            "priority_2": "address-40",
            "priority_3": "sub-address-432"
        }
    ],
    "zonation": [
        {
            "id": "zonation-1",
            "name": 'A',
            "address": [
                "address-7",
                "address-16",
                "address-35",
                "address-1"
            ]
        },
        {
            "id": "zonation-2",
            "name": 'B',
            "address": [
                "address-12",
                "address-19",
                "address-23",
                "address-21",
                "address-4",
                "address-34",
                "address-38"
            ]
        },
        {
            "id": "zonation-3",
            "name": 'C',
            "address": [
                "address-20",
                "address-33",
                "address-39",
                "address-10",
                "address-29",
                "address-24",
                "address-25",
                "address-27",
                "address-8",
                "address-28"
            ]
        },
        {
            "id": "zonation-4",
            "name": 'D',
            "address": [
                "address-17",
                "address-13",
                "address-5",
                "address-40",
                "address-37",
                "address-6",
                "address-26",
                "address-14",
                "address-3",
                "address-9",
                "address-11"
            ]
        },
        {
            "id": "zonation-5",
            "name": 'E',
            "address": [
                "address-2",
                "address-15",
                "address-29",
                "address-36",
                "address-31",
                "address-18",
                "address-32",
                "address-22"
            ]
        },
    ]
    }
}

export {
    ahp,
    fuzzyComparisonMatrix,
    scalaSaatyMatrix,
    school,
    seeders
}