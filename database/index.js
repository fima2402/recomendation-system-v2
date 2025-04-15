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
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/327D7567-4785-4231-A0BD-1DCD17149087"
            },
            {
                "school_id": "school-2",
                "name": "SMAN 1 Bojong Gede",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/31767C1C-5E40-42FC-8417-F3D72853C1DC"
            },
            {
                "school_id": "school-3",
                "name": "SMKN 1 Bojong Gede",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/328D04E8-42A1-4CFF-9C0B-8D6B478F3DC8"
            },
            {
                "school_id": "school-4",
                "name": "SMAN 1 Caringin",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5A973960-91BB-44E2-9A69-BF89C19F0691"
            },
            {
                "school_id": "school-5",
                "name": "SMAN 1 Cariu",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/09934F36-2F76-4F13-8EBC-F412393EDDDF"
            },
            {
                "school_id": "school-6",
                "name": "SMKN 1 Cariu",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/FB111095-3AF8-47DF-8D55-FCD948BC3492"
            },
            {
                "school_id": "school-7",
                "name": "SMAN 1 Ciampea",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5B5AF952-EC28-4F7A-ADDD-83179265D988"
            },
            {
                "school_id": "school-8",
                "name": "SMAN 1 Ciawi",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E65E4EAB-D2CB-4069-B421-3AAFF43B6F6F"
            },
            {
                "school_id": "school-9",
                "name": "SMAN 1 Cibinong",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/FEDF470A-9546-4F2A-A633-75828AB281BB"
            },
            {
                "school_id": "school-10",
                "name": "SMAN 2 Cibinong",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/DBE9F307-AC0E-4FEC-AEF4-588F2C17BF73"
            },
            {
                "school_id": "school-11",
                "name": "SMAN 3 Cibinong",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D33096A6-0C7D-4ADC-9985-9E4B41041BF7"
            },
            {
                "school_id": "school-12",
                "name": "SMAN 4 Cibinong",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/14D5F67B-654D-4316-A5FC-94578ED97E00"
            },
            {
                "school_id": "school-13",
                "name": "SMKN 1 Cibinong",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E222ED94-13E7-40D2-A0E5-1221BE7F54C5"
            },
            {
                "school_id": "school-14",
                "name": "SMKN 2 Cibinong",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7E37B53B-8758-46CC-9CBB-192EE1BC38CC"
            },
            {
                "school_id": "school-15",
                "name": "SMAN 1 Cibungbulang",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4172AF88-8455-4B07-B4AB-CCDFB03A9951"
            },
            {
                "school_id": "school-16",
                "name": "SMAN 1 Cigombong",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2E549B70-AA2D-4E2B-8F02-2C81EFAE78A1"
            },
            {
                "school_id": "school-17",
                "name": "SMAN 1 Cigudeg",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4AD1E69E-6CF4-4299-BDB7-1DEA727F5381"
            },
            {
                "school_id": "school-18",
                "name": "SMAN 1 Cijeruk",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/BA726019-5819-4FCA-9964-87506728E7D1"
            },
            {
                "school_id": "school-19",
                "name": "SMAN 1 Cileungsi",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/6C4672BD-B7F7-4135-ABD9-C9A553A8DBF8"
            },
            {
                "school_id": "school-20",
                "name": "SMAN 2 Cileungsi",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/1D155FAF-9918-43D7-B3A3-77A6FCE75DA0"
            },
            {
                "school_id": "school-21",
                "name": "SMKN 1 Cileungsi",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A74A6842-26C1-41BD-A8ED-0BE331526747"
            },
            {
                "school_id": "school-22",
                "name": "SMAN 1 Ciomas",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7269A9FD-A3BE-4947-86C8-4C67312E05AC"
            },
            {
                "school_id": "school-23",
                "name": "SMKN 1 Ciomas",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B959EC8F-A5E3-4E7F-A3B5-2A2E25690A25"
            },
            {
                "school_id": "school-24",
                "name": "SMAN 1 Cisarua",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/6D33C951-7E0D-4191-85D3-87EE7491E231"
            },
            {
                "school_id": "school-25",
                "name": "SMKN 1 Cisarua",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/AB3BD14A-686D-4FFA-84F5-EED5987EED5F"
            },
            {
                "school_id": "school-26",
                "name": "SMAN 1 Ciseeng",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B824C00A-B2C7-4575-89B6-953F5E9634EF"
            },
            {
                "school_id": "school-27",
                "name": "SMAN 1 Citeureup",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/8C4695B4-2781-48A5-91F6-42198B73ABB8"
            },
            {
                "school_id": "school-28",
                "name": "SMAN 1 Dramaga",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/0DCFCF97-968D-4EE3-800A-483E3E222ED2"
            },
            {
                "school_id": "school-29",
                "name": "SMAN 1 Gunung Sindur",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A2321281-57A2-4910-94B3-2CA1082E213B"
            },
            {
                "school_id": "school-30",
                "name": "SMKN 1 Gunung Sindur",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C24D7182-4969-4FF2-A861-DF4B8DE7C3E3"
            },
            {
                "school_id": "school-31",
                "name": "SMAN 1 Gunung Putri",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/57D7A824-4A1E-4930-82EA-FFDD67405064"
            },
            {
                "school_id": "school-32",
                "name": "SMAN 2 Gunung Putri",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/8154DB21-C95D-4807-936F-72517140E9E3"
            },
            {
                "school_id": "school-33",
                "name": "SMKN 1 Gunung Putri",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E951E23D-9DBD-47D5-AFCD-DF361BA39012"
            },
            {
                "school_id": "school-34",
                "name": "SMAN 1 Jasinga",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B4BC18A1-7564-492F-AE77-519D01F82558"
            },
            {
                "school_id": "school-35",
                "name": "SMAN 1 Jonggol",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/411C70F8-D47B-423B-8EAA-FE5F83A963C7"
            },
            {
                "school_id": "school-36",
                "name": "SMAN 2 Jonggol",
                "akreditasi": "B",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2803E1B7-28BC-403D-AD60-1D716AE7780A"
            },
            {
                "school_id": "school-37",
                "name": "SMKN 1 Kemang",
                "akreditasi": "B",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/ADBA59F1-E0F5-44D6-91E0-4BCF31F9A9E6"
            },
            {
                "school_id": "school-38",
                "name": "SMAN 1 Klapanunggal",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D9528482-CCAE-4825-81D7-638673193AB9"
            },
            {
                "school_id": "school-39",
                "name": "SMAN 1 Leuwiliang",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/84B5C520-2C96-4472-9FD4-888668C64D56"
            },
            {
                "school_id": "school-40",
                "name": "SMKN 1 Leuwiliang",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "smk",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/3AE01CE7-ABFD-4FC0-8787-259CF3443A67"
            },
            {
                "school_id": "school-41",
                "name": "SMAN 1 Leuwisadeng",
                "akreditasi": "B",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/9D67CABA-CCFE-489D-BAD2-0133CD9FFF1C"
            },
            {
                "school_id": "school-42",
                "name": "SMAN 1 Megamendung",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/AB2E30EB-A8F4-402C-A33C-63E13ACEB989"
            },
            {
                "school_id": "school-43",
                "name": "SMAN 1 Nanggung",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/4A21C1DA-57E6-40C0-A00D-55C539F5D73E"
            },
            {
                "school_id": "school-44",
                "name": "SMAN 1 Pamijahan",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C84CEA27-38E8-4DA5-A763-11B6A1F5586D"
            },
            {
                "school_id": "school-45",
                "name": "SMAN 1 Parung",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D7FB63CE-6A66-4F81-B2F7-CEAA8A7FAB4A"
            },
            {
                "school_id": "school-46",
                "name": "SMAN 1 Parung Panjang",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7602CA38-F27D-44DF-BC1E-84043509ACD2"
            },
            {
                "school_id": "school-47",
                "name": "SMAN 1 Ranca Bungur",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/ABB6D1F4-F7C8-4531-B775-69557505F231"
            },
            {
                "school_id": "school-48",
                "name": "SMAN 1 Rumpin",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/D2277861-5306-460A-BB52-1EA24CC566AC"
            },
            {
                "school_id": "school-49",
                "name": "SMAN 1 Sukajaya",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/A2F55039-9258-4CB9-9487-C4833C90B985"
            },
            {
                "school_id": "school-50",
                "name": "SMAN 1 Sukamakmur",
                "akreditasi": "B",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/27C876C2-8FAB-4FEC-BF96-1A893C85E6AF"
            },
            {
                "school_id": "school-51",
                "name": "SMAN 1 Sukaraja",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/7E695E9A-082C-41C0-B0D1-AC7798CCB052"
            },
            {
                "school_id": "school-52",
                "name": "SMAN 1 Tajurhalang",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C5A7DB58-1A97-4FA8-B48C-BED3B9D13CAE"
            },
            {
                "school_id": "school-53",
                "name": "SMAN 1 Tamansari",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/58B0343F-1533-4105-BB1C-A0BCBAFD7AD7"
            },
            {
                "school_id": "school-54",
                "name": "SMAN 1 Tanjung Sari",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/C9AFE91E-10D0-43AD-8730-97B2901D82AB"
            },
            {
                "school_id": "school-55",
                "name": "SMAN 1 Tenjo",
                "akreditasi": "A",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/E8870AC1-3391-43B3-8FB1-A519218ABED3"
            },
            {
                "school_id": "school-56",
                "name": "SMAN 1 Tenjolaya",
                "akreditasi": "B",
                "fasilitas": "kurang",
                "type": "sma",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/B98C5B98-1877-47B9-B49E-1327DEF69F68"
            },
            {
                "school_id": "school-57",
                "name": "MAN 1 Bogor",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "man",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/30F972DC-F145-4AB9-B6C9-519B48144486"
            },
            {
                "school_id": "school-58",
                "name": "MAN 2 Bogor",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "man",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5058E19F-8E8F-4FDE-9FFB-79B936F201BE"
            },
            {
                "school_id": "school-59",
                "name": "MAN 3 Bogor",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "man",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/71D7CD84-4EB5-4713-A046-35D43E655BCB"
            },
            {
                "school_id": "school-60",
                "name": "MAN 5 Bogor",
                "akreditasi": "A",
                "fasilitas": "memadai",
                "type": "man",
                "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/CBB4D592-C6D4-448C-A171-8C7DB5119D03"
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
            "name": "Gunung Putri"
        },
        {
            "id": "address-19",
            "name": "Gunung Sindur"
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
            "name": "Parung Panjang"
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
          "id": "sub_address_1",
          "address_id": "address-1",
          "name": "Babakan Madang"
        },
        {
          "id": "sub_address_2",
          "address_id": "address-1",
          "name": "Bojong Koneng"
        },
        {
          "id": "sub_address_3",
          "address_id": "address-1",
          "name": "Cijayanti"
        },
        {
          "id": "sub_address_4",
          "address_id": "address-1",
          "name": "Cipambuan"
        },
        {
          "id": "sub_address_5",
          "address_id": "address-1",
          "name": "Citaringgul"
        },
        {
          "id": "sub_address_6",
          "address_id": "address-1",
          "name": "Kadumangu"
        },
        {
          "id": "sub_address_7",
          "address_id": "address-1",
          "name": "Karang Tengah"
        },
        {
          "id": "sub_address_8",
          "address_id": "address-1",
          "name": "Sentul"
        },
        {
          "id": "sub_address_9",
          "address_id": "address-1",
          "name": "Sumur Batu"
        },
        {
          "id": "sub_address_10",
          "address_id": "address-2",
          "name": "Bojong Baru"
        },
        {
          "id": "sub_address_11",
          "address_id": "address-2",
          "name": "Bojonggede"
        },
        {
          "id": "sub_address_12",
          "address_id": "address-2",
          "name": "Cimanggis"
        },
        {
          "id": "sub_address_13",
          "address_id": "address-2",
          "name": "Kedung Waringin"
        },
        {
          "id": "sub_address_14",
          "address_id": "address-2",
          "name": "Ragajaya"
        },
        {
          "id": "sub_address_15",
          "address_id": "address-2",
          "name": "Rawa Panjang"
        },
        {
          "id": "sub_address_16",
          "address_id": "address-2",
          "name": "Susukan"
        },
        {
          "id": "sub_address_17",
          "address_id": "address-2",
          "name": "Waringin Jaya"
        },
        {
          "id": "sub_address_18",
          "address_id": "address-2",
          "name": "Pabuaran"
        },
        {
          "id": "sub_address_19",
          "address_id": "address-3",
          "name": "Pasir Buncir"
        },
        {
          "id": "sub_address_20",
          "address_id": "address-3",
          "name": "Caringin"
        },
        {
          "id": "sub_address_21",
          "address_id": "address-3",
          "name": "Ciderum"
        },
        {
          "id": "sub_address_22",
          "address_id": "address-3",
          "name": "Ciherang"
        },
        {
          "id": "sub_address_23",
          "address_id": "address-3",
          "name": "Pondok Cimande"
        },
        {
          "id": "sub_address_24",
          "address_id": "address-3",
          "name": "Cimande Hilir"
        },
        {
          "id": "sub_address_25",
          "address_id": "address-3",
          "name": "Cinagara"
        },
        {
          "id": "sub_address_26",
          "address_id": "address-3",
          "name": "Lemah Duhur"
        },
        {
          "id": "sub_address_27",
          "address_id": "address-3",
          "name": "Muara Jaya"
        },
        {
          "id": "sub_address_28",
          "address_id": "address-3",
          "name": "Pancawati"
        },
        {
          "id": "sub_address_29",
          "address_id": "address-3",
          "name": "Pasir"
        },
        {
          "id": "sub_address_30",
          "address_id": "address-3",
          "name": "Muncang Tangkil"
        },
        {
          "id": "sub_address_31",
          "address_id": "address-4",
          "name": "Babakan Raden"
        },
        {
          "id": "sub_address_32",
          "address_id": "address-4",
          "name": "Bantar Kuning"
        },
        {
          "id": "sub_address_33",
          "address_id": "address-4",
          "name": "Cariu"
        },
        {
          "id": "sub_address_34",
          "address_id": "address-4",
          "name": "Cibatu Tiga"
        },
        {
          "id": "sub_address_35",
          "address_id": "address-4",
          "name": "Cikutamahi"
        },
        {
          "id": "sub_address_36",
          "address_id": "address-4",
          "name": "Karya Mekar"
        },
        {
          "id": "sub_address_37",
          "address_id": "address-4",
          "name": "Kuta Mekar"
        },
        {
          "id": "sub_address_38",
          "address_id": "address-4",
          "name": "Mekarwangi"
        },
        {
          "id": "sub_address_39",
          "address_id": "address-4",
          "name": "Sukajadi"
        },
        {
          "id": "sub_address_40",
          "address_id": "address-4",
          "name": "Tegal Panjang"
        },
        {
          "id": "sub_address_41",
          "address_id": "address-5",
          "name": "Bojong Jengkol"
        },
        {
          "id": "sub_address_42",
          "address_id": "address-5",
          "name": "Bojong Rangkas"
        },
        {
          "id": "sub_address_43",
          "address_id": "address-5",
          "name": "Benteng"
        },
        {
          "id": "sub_address_44",
          "address_id": "address-5",
          "name": "Ciampea"
        },
        {
          "id": "sub_address_45",
          "address_id": "address-5",
          "name": "Ciampea Udik"
        },
        {
          "id": "sub_address_46",
          "address_id": "address-5",
          "name": "Cibadak"
        },
        {
          "id": "sub_address_47",
          "address_id": "address-5",
          "name": "Cibanteng"
        },
        {
          "id": "sub_address_48",
          "address_id": "address-5",
          "name": "Cibuntu"
        },
        {
          "id": "sub_address_49",
          "address_id": "address-5",
          "name": "Cicadas"
        },
        {
          "id": "sub_address_50",
          "address_id": "address-5",
          "name": "Cihideung Ilir"
        },
        {
          "id": "sub_address_51",
          "address_id": "address-5",
          "name": "Cihideung Udik"
        },
        {
          "id": "sub_address_52",
          "address_id": "address-5",
          "name": "Cinangka"
        },
        {
          "id": "sub_address_53",
          "address_id": "address-5",
          "name": "Tegal Waru"
        },
        {
          "id": "sub_address_54",
          "address_id": "address-6",
          "name": "Banjar Sari"
        },
        {
          "id": "sub_address_55",
          "address_id": "address-6",
          "name": "Banjar Wangi"
        },
        {
          "id": "sub_address_56",
          "address_id": "address-6",
          "name": "Banjar Waru"
        },
        {
          "id": "sub_address_57",
          "address_id": "address-6",
          "name": "Bendungan"
        },
        {
          "id": "sub_address_58",
          "address_id": "address-6",
          "name": "Bitung Sari"
        },
        {
          "id": "sub_address_59",
          "address_id": "address-6",
          "name": "Bojong Murni"
        },
        {
          "id": "sub_address_60",
          "address_id": "address-6",
          "name": "Ciawi"
        },
        {
          "id": "sub_address_61",
          "address_id": "address-6",
          "name": "Cibedug"
        },
        {
          "id": "sub_address_62",
          "address_id": "address-6",
          "name": "Cileungsi"
        },
        {
          "id": "sub_address_63",
          "address_id": "address-6",
          "name": "Citapen"
        },
        {
          "id": "sub_address_64",
          "address_id": "address-6",
          "name": "Jambu Luwuk"
        },
        {
          "id": "sub_address_65",
          "address_id": "address-6",
          "name": "Pandansari"
        },
        {
          "id": "sub_address_66",
          "address_id": "address-6",
          "name": "Teluk Pinang"
        },
        {
          "id": "sub_address_67",
          "address_id": "address-7",
          "name": "Cibinong"
        },
        {
          "id": "sub_address_68",
          "address_id": "address-7",
          "name": "Cirimekar"
        },
        {
          "id": "sub_address_69",
          "address_id": "address-7",
          "name": "Ciriung"
        },
        {
          "id": "sub_address_70",
          "address_id": "address-7",
          "name": "Harapan Jaya"
        },
        {
          "id": "sub_address_71",
          "address_id": "address-7",
          "name": "Karadenan"
        },
        {
          "id": "sub_address_72",
          "address_id": "address-7",
          "name": "Nanggewer"
        },
        {
          "id": "sub_address_73",
          "address_id": "address-7",
          "name": "Nanggewer Mekar"
        },
        {
          "id": "sub_address_74",
          "address_id": "address-7",
          "name": "Pabuaran"
        },
        {
          "id": "sub_address_75",
          "address_id": "address-7",
          "name": "Pabuaran Mekar"
        },
        {
          "id": "sub_address_76",
          "address_id": "address-7",
          "name": "Pakansari"
        },
        {
          "id": "sub_address_77",
          "address_id": "address-7",
          "name": "Pondok Rajeg"
        },
        {
          "id": "sub_address_78",
          "address_id": "address-7",
          "name": "Sukahati Tengah"
        },
        {
          "id": "sub_address_79",
          "address_id": "address-8",
          "name": "Cemplang"
        },
        {
          "id": "sub_address_80",
          "address_id": "address-8",
          "name": "Ciaruteun Ilir"
        },
        {
          "id": "sub_address_81",
          "address_id": "address-8",
          "name": "Ciaruteun Udik"
        },
        {
          "id": "sub_address_82",
          "address_id": "address-8",
          "name": "Cibatok 1"
        },
        {
          "id": "sub_address_83",
          "address_id": "address-8",
          "name": "Cibatok 2"
        },
        {
          "id": "sub_address_84",
          "address_id": "address-8",
          "name": "Cijujung"
        },
        {
          "id": "sub_address_85",
          "address_id": "address-8",
          "name": "Cimanggu 1"
        },
        {
          "id": "sub_address_86",
          "address_id": "address-8",
          "name": "Cimanggu 2"
        },
        {
          "id": "sub_address_87",
          "address_id": "address-8",
          "name": "Dukuh"
        },
        {
          "id": "sub_address_88",
          "address_id": "address-8",
          "name": "Galuga"
        },
        {
          "id": "sub_address_89",
          "address_id": "address-8",
          "name": "Girimulya"
        },
        {
          "id": "sub_address_90",
          "address_id": "address-8",
          "name": "Leuweung Kolot"
        },
        {
          "id": "sub_address_91",
          "address_id": "address-8",
          "name": "Situ Ilir"
        },
        {
          "id": "sub_address_92",
          "address_id": "address-8",
          "name": "Situ Udik"
        },
        {
          "id": "sub_address_93",
          "address_id": "address-8",
          "name": "Sukamaju"
        },
        {
          "id": "sub_address_94",
          "address_id": "address-9",
          "name": "Ciadeg"
        },
        {
          "id": "sub_address_95",
          "address_id": "address-9",
          "name": "Ciburayut"
        },
        {
          "id": "sub_address_96",
          "address_id": "address-9",
          "name": "Ciburuy"
        },
        {
          "id": "sub_address_97",
          "address_id": "address-9",
          "name": "Cigombong"
        },
        {
          "id": "sub_address_98",
          "address_id": "address-9",
          "name": "Cisalada"
        },
        {
          "id": "sub_address_99",
          "address_id": "address-9",
          "name": "Pasirjaya"
        },
        {
          "id": "sub_address_100",
          "address_id": "address-9",
          "name": "Srogol"
        },
        {
          "id": "sub_address_101",
          "address_id": "address-9",
          "name": "Tugujaya"
        },
        {
          "id": "sub_address_102",
          "address_id": "address-9",
          "name": "Watesjaya"
        },
        {
          "id": "sub_address_103",
          "address_id": "address-10",
          "name": "Argapura"
        },
        {
          "id": "sub_address_104",
          "address_id": "address-10",
          "name": "Bangunjaya"
        },
        {
          "id": "sub_address_105",  
          "address_id": "address-10",
          "name": "Banyu Asih"
        },
        {
          "id": "sub_address_106",
          "address_id": "address-10",
          "name": "Banyu Resmi"
        },
        {
          "id": "sub_address_107",
          "address_id": "address-10",
          "name": "Banyu Wangi"
        },
        {
          "id": "sub_address_108",
          "address_id": "address-10",
          "name": "Batu Jajar"
        },
        {
          "id": "sub_address_109",
          "address_id": "address-10",
          "name": "Bunar"
        },
        {
          "id": "sub_address_110",
          "address_id": "address-10",
          "name": "Cigudeg"
        },
        {
          "id": "sub_address_111",
          "address_id": "address-10",
          "name": "Cintamanik"
        },
        {
          "id": "sub_address_112",
          "address_id": "address-10",
          "name": "Mekarjaya"
        },
        {
          "id": "sub_address_113",
          "address_id": "address-10",
          "name": "Rengasjajar"
        },
        {
          "id": "sub_address_114",
          "address_id": "address-10",
          "name": "Sukamaju"
        },
        {
          "id": "sub_address_115",
          "address_id": "address-10",
          "name": "Sukaraksa"
        },
        {
          "id": "sub_address_116",
          "address_id": "address-10",
          "name": "Tegalega"
        },
        {
          "id": "sub_address_117",
          "address_id": "address-10",
          "name": "Wargajaya"
        },
        {
          "id": "sub_address_118",
          "address_id": "address-11",
          "name": "Cibalung"
        },
        {
          "id": "sub_address_119",
          "address_id": "address-11",
          "name": "Cijeruk"
        },
        {
          "id": "sub_address_120",
          "address_id": "address-11",
          "name": "Cipelang"
        },
        {
          "id": "sub_address_121",
          "address_id": "address-11",
          "name": "Cipicung"
        },
        {
          "id": "sub_address_122",
          "address_id": "address-11",
          "name": "Palasari"
        },
        {
          "id": "sub_address_123",
          "address_id": "address-11",
          "name": "Sukaharja"
        },
        {
          "id": "sub_address_124",
          "address_id": "address-11",
          "name": "Tajur Halang"
        },
        {
          "id": "sub_address_125",
          "address_id": "address-11",
          "name": "Tanjung Sari"
        },
        {
          "id": "sub_address_126",
          "address_id": "address-11",
          "name": "Warung Menteng"
        },
        {
          "id": "sub_address_127",
          "address_id": "address-12",
          "name": "Cileungsi"
        },
        {
          "id": "sub_address_128",
          "address_id": "address-12",
          "name": "Cileungsi Kidul"
        },
        {
          "id": "sub_address_129",
          "address_id": "address-12",
          "name": "Cipenjo"
        },
        {
          "id": "sub_address_130",
          "address_id": "address-12",
          "name": "Cipeucang"
        },
        {
          "id": "sub_address_131",
          "address_id": "address-12",
          "name": "Dayeuh"
        },
        {
          "id": "sub_address_132",
          "address_id": "address-12",
          "name": "Gandoang"
        },
        {
          "id": "sub_address_133",
          "address_id": "address-12",
          "name": "Jatisari"
        },
        {
          "id": "sub_address_134",
          "address_id": "address-12",
          "name": "Limus"
        },
        {
          "id": "sub_address_135",
          "address_id": "address-12",
          "name": "Nunggal"
        },
        {
          "id": "sub_address_136",
          "address_id": "address-12",
          "name": "Mampir"
        },
        {
          "id": "sub_address_137",
          "address_id": "address-12",
          "name": "Mekarsari"
        },
        {
          "id": "sub_address_138",
          "address_id": "address-12",
          "name": "Pasir Angin"
        },
        {
          "id": "sub_address_139",
          "address_id": "address-12",
          "name": "Setu Sari"
        },
        {
          "id": "sub_address_140",
          "address_id": "address-13",
          "name": "Ciapus"
        },
        {
          "id": "sub_address_141",
          "address_id": "address-13",
          "name": "Ciomas"
        },
        {
          "id": "sub_address_142",
          "address_id": "address-13",
          "name": "Ciomas Rahayu"
        },
        {
          "id": "sub_address_143",
          "address_id": "address-13",
          "name": "Kota Batu"
        },
        {
          "id": "sub_address_144",
          "address_id": "address-13",
          "name": "Laladon"
        },
        {
          "id": "sub_address_145",
          "address_id": "address-13",
          "name": "Mekarjaya"
        },
        {
          "id": "sub_address_146",
          "address_id": "address-13",
          "name": "Pagelaran"
        },
        {
          "id": "sub_address_147",
          "address_id": "address-13",
          "name": "Parakan"
        },
        {
          "id": "sub_address_148",
          "address_id": "address-13",
          "name": "Sukaharja"
        },
        {
          "id": "sub_address_149",
          "address_id": "address-13",
          "name": "Sukamakmur"
        },
        {
          "id": "sub_address_150",
          "address_id": "address-13",
          "name": "Padasuka"
        },
        {
          "id": "sub_address_151",
          "address_id": "address-14",
          "name": "Batu Layang"
        },
        {
          "id": "sub_address_152",
          "address_id": "address-14",
          "name": "Cibeureum"
        },
        {
          "id": "sub_address_153",
          "address_id": "address-14",
          "name": "Cilember"
        },
        {
          "id": "sub_address_154",
          "address_id": "address-14",
          "name": "Citeko"
        },
        {
          "id": "sub_address_155",
          "address_id": "address-14",
          "name": "Jogjogan"
        },
        {
          "id": "sub_address_156",
          "address_id": "address-14",
          "name": "Kopo"
        },
        {
          "id": "sub_address_157",
          "address_id": "address-14",
          "name": "Leuwimalang"
        },
        {
          "id": "sub_address_158",
          "address_id": "address-14",
          "name": "Tugu Selatan"
        },
        {
          "id": "sub_address_159",
          "address_id": "address-14",
          "name": "Tugu Utara"
        },
        {
          "id": "sub_address_160",
          "address_id": "address-14",
          "name": "Cisarua"
        },
        {
          "id": "sub_address_161",
          "address_id": "address-15",
          "name": "Babakan"
        },
        {
          "id": "sub_address_162",
          "address_id": "address-15",
          "name": "Cibeuteung Muara"
        },
        {
          "id": "sub_address_163",
          "address_id": "address-15",
          "name": "Cibeuteung Udik"
        },
        {
          "id": "sub_address_164",
          "address_id": "address-15",
          "name": "Cibentang"
        },
        {
          "id": "sub_address_165",
          "address_id": "address-15",
          "name": "Cihoe"
        },
        {
          "id": "sub_address_166",
          "address_id": "address-15",
          "name": "Ciseeng"
        },
        {
          "id": "sub_address_167",
          "address_id": "address-15",
          "name": "Karihki"
        },
        {
          "id": "sub_address_168",
          "address_id": "address-15",
          "name": "Kuripan"
        },
        {
          "id": "sub_address_169",
          "address_id": "address-15",
          "name": "Parigi Mekar"
        },
        {
          "id": "sub_address_170",
          "address_id": "address-15",
          "name": "Putat Nutug"
        },
        {
          "id": "sub_address_171",
          "address_id": "address-16",
          "name": "Citeureup"
        },
        {
          "id": "sub_address_172",
          "address_id": "address-16",
          "name": "Gunung Sari"
        },
        {
          "id": "sub_address_173",
          "address_id": "address-16",
          "name": "Hambalang"
        },
        {
          "id": "sub_address_174",
          "address_id": "address-16",
          "name": "Karang Asem Timur"
        },
        {
          "id": "sub_address_175",
          "address_id": "address-16",
          "name": "Leuwinutug"
        },
        {
          "id": "sub_address_176",
          "address_id": "address-16",
          "name": "Pasir Mukti"
        },
        {
          "id": "sub_address_177",
          "address_id": "address-16",
          "name": "Puspasari"
        },
        {
          "id": "sub_address_178",
          "address_id": "address-16",
          "name": "Sanja"
        },
        {
          "id": "sub_address_179",
          "address_id": "address-16",
          "name": "Sukahati"
        },
        {
          "id": "sub_address_180",
          "address_id": "address-16",
          "name": "Tajur"
        },
        {
          "id": "sub_address_181",
          "address_id": "address-16",
          "name": "Tangkil"
        },
        {
          "id": "sub_address_182",
          "address_id": "address-16",
          "name": "Tarikolot"
        },
        {
          "id": "sub_address_183",
          "address_id": "address-16",
          "name": "Karang Asem Barat"
        },
        {
          "id": "sub_address_184",
          "address_id": "address-16",
          "name": "Puspanegara"
        },
        {
          "id": "sub_address_185",
          "address_id": "address-17",
          "name": "Babakan"
        },
        {
          "id": "sub_address_186",
          "address_id": "address-17",
          "name": "Ciherang"
        },
        {
          "id": "sub_address_187",
          "address_id": "address-17",
          "name": "Cikarawang"
        },
        {
          "id": "sub_address_188",
          "address_id": "address-17",
          "name": "Dramaga"
        },
        {
          "id": "sub_address_189",
          "address_id": "address-17",
          "name": "Neglasari"
        },
        {
          "id": "sub_address_190",
          "address_id": "address-17",
          "name": "Petir"
        },
        {
          "id": "sub_address_191",
          "address_id": "address-17",
          "name": "Purwasarii"
        },
        {
          "id": "sub_address_192",
          "address_id": "address-17",
          "name": "Sinar Sari"
        },
        {
          "id": "sub_address_193",
          "address_id": "address-17",
          "name": "Sukadamai"
        },
        {
          "id": "sub_address_194",
          "address_id": "address-17",
          "name": "Sukawening"
        },
        {
          "id": "sub_address_195",
          "address_id": "address-18",
          "name": "Bojong Kulur"
        },
        {
          "id": "sub_address_196",
          "address_id": "address-18",
          "name": "Bojong Nangka"
        },
        {
          "id": "sub_address_197",
          "address_id": "address-18",
          "name": "Ciangsana"
        },
        {
          "id": "sub_address_198",
          "address_id": "address-18",
          "name": "Cicadas"
        },
        {
          "id": "sub_address_199",
          "address_id": "address-18",
          "name": "Cikeas Udik"
        },
        {
          "id": "sub_address_200",
          "address_id": "address-18",
          "name": "Gunung Putri"
        },
        {
          "id": "sub_address_201",
          "address_id": "address-18",
          "name": "Kranggan"
        },
        {
          "id": "sub_address_202",
          "address_id": "address-18",
          "name": "Nagrak"
        },
        {
          "id": "sub_address_203",
          "address_id": "address-18",
          "name": "Tlajung Udik"
        },
        {
          "id": "sub_address_204",
          "address_id": "address-18",
          "name": "Wanaherang"
        },
        {
          "id": "sub_address_205",
          "address_id": "address-19",
          "name": "Cibadung"
        },
        {
          "id": "sub_address_206",
          "address_id": "address-19",
          "name": "Cibinong"
        },
        {
          "id": "sub_address_207",
          "address_id": "address-19",
          "name": "Cidokom"
        },
        {
          "id": "sub_address_208",
          "address_id": "address-19",
          "name": "Curug"
        },
        {
          "id": "sub_address_209",
          "address_id": "address-19",
          "name": "Gunungsindur"
        },
        {
          "id": "sub_address_210",
          "address_id": "address-19",
          "name": "Jampang"
        },
        {
          "id": "sub_address_211",
          "address_id": "address-19",
          "name": "Pabuaran"
        },
        {
          "id": "sub_address_212",
          "address_id": "address-19",
          "name": "Padurenan"
        },
        {
          "id": "sub_address_213",
          "address_id": "address-19",
          "name": "Pengasinan"
        },
        {
          "id": "sub_address_214",
          "address_id": "address-19",
          "name": "Rawakalong"
        },
        {
          "id": "sub_address_215",
          "address_id": "address-20",
          "name": "Bagoang"
        },
        {
          "id": "sub_address_216",
          "address_id": "address-20",
          "name": "Barengkok"
        },
        {
          "id": "sub_address_217",
          "address_id": "address-20",
          "name": "Cikopomayak"
        },
        {
          "id": "sub_address_218",
          "address_id": "address-20",
          "name": "Curug"
        },
        {
          "id": "sub_address_219",
          "address_id": "address-20",
          "name": "Jasinga"
        },
        {
          "id": "sub_address_220",
          "address_id": "address-20",
          "name": "Jugala Jaya"
        },
        {
          "id": "sub_address_221",
          "address_id": "address-20",
          "name": "Kalongsawah"
        },
        {
          "id": "sub_address_222",
          "address_id": "address-20",
          "name": "Koleang"
        },
        {
          "id": "sub_address_223",
          "address_id": "address-20",
          "name": "Neglasari"
        },
        {
          "id": "sub_address_224",
          "address_id": "address-20",
          "name": "Pamagersari"
        },
        {
          "id": "sub_address_225",
          "address_id": "address-20",
          "name": "Pangaur"
        },
        {
          "id": "sub_address_226",
          "address_id": "address-20",
          "name": "Pangradin"
        },
        {
          "id": "sub_address_227",
          "address_id": "address-20",
          "name": "Sipak Setu"
        },
        {
          "id": "sub_address_228",
          "address_id": "address-20",
          "name": "Tegal Wangi"
        },
        {
          "id": "sub_address_229",
          "address_id": "address-20",
          "name": "Wirajaya"
        },
        {
          "id": "sub_address_230",
          "address_id": "address-21",
          "name": "Balekambang"
        },
        {
          "id": "sub_address_231",
          "address_id": "address-21",
          "name": "Bendungan"
        },
        {
          "id": "sub_address_232",
          "address_id": "address-21",
          "name": "Cibodas"
        },
        {
          "id": "sub_address_233",
          "address_id": "address-21",
          "name": "Jonggol"
        },
        {
          "id": "sub_address_234",
          "address_id": "address-21",
          "name": "Singajaya"
        },
        {
          "id": "sub_address_235",
          "address_id": "address-21",
          "name": "Singasari"
        },
        {
          "id": "sub_address_236",
          "address_id": "address-21",
          "name": "Sirnagalih"
        },
        {
          "id": "sub_address_237",
          "address_id": "address-21",
          "name": "Sukagalih"
        },
        {
          "id": "sub_address_238",
          "address_id": "address-21",
          "name": "Sukajaya"
        },
        {
          "id": "sub_address_239",
          "address_id": "address-21",
          "name": "Sukamaju"
        },
        {
          "id": "sub_address_240",
          "address_id": "address-21",
          "name": "Sukamanah"
        },
        {
          "id": "sub_address_241",
          "address_id": "address-21",
          "name": "Sukanegara"
        },
        {
          "id": "sub_address_242",
          "address_id": "address-21",
          "name": "Sukasirna"
        },
        {
          "id": "sub_address_243",
          "address_id": "address-21",
          "name": "Weninggalih"
        },
        {
          "id": "sub_address_244",
          "address_id": "address-22",
          "name": "Bojong"
        },
        {
          "id": "sub_address_245",
          "address_id": "address-22",
          "name": "Jampang"
        },
        {
          "id": "sub_address_246",
          "address_id": "address-22",
          "name": "Kemang Pabuaran"
        },
        {
          "id": "sub_address_247",
          "address_id": "address-22",
          "name": "Parakan Jaya"
        },
        {
          "id": "sub_address_248",
          "address_id": "address-22",
          "name": "Pondok Udik"
        },
        {
          "id": "sub_address_249",
          "address_id": "address-22",
          "name": "Semplak Barat"
        },
        {
          "id": "sub_address_250",
          "address_id": "address-22",
          "name": "Tegal"
        },
        {
          "id": "sub_address_251",
          "address_id": "address-22",
          "name": "Atang Senjaya"
        },
        {
          "id": "sub_address_252",
          "address_id": "address-23",
          "name": "Bantar Jati"
        },
        {
          "id": "sub_address_253",
          "address_id": "address-23",
          "name": "Bojong"
        },
        {
          "id": "sub_address_254",
          "address_id": "address-23",
          "name": "Cikahuripan"
        },
        {
          "id": "sub_address_255",
          "address_id": "address-23",
          "name": "Kembang Kuning"
        },
        {
          "id": "sub_address_256",
          "address_id": "address-23",
          "name": "Klapanunggal"
        },
        {
          "id": "sub_address_257",
          "address_id": "address-23",
          "name": "Leuwikaret"
        },
        {
          "id": "sub_address_258",
          "address_id": "address-23",
          "name": "Ligarmukti"
        },
        {
          "id": "sub_address_259",
          "address_id": "address-23",
          "name": "Lulut"
        },
        {
          "id": "sub_address_260",
          "address_id": "address-23",
          "name": "Nambo"
        },
        {
          "id": "sub_address_261",
          "address_id": "address-24",
          "name": "Barengkok"
        },
        {
          "id": "sub_address_262",
          "address_id": "address-24",
          "name": "Cibeber I"
        },
        {
          "id": "sub_address_263",
          "address_id": "address-24",
          "name": "Cibeber II"
        },
        {
          "id": "sub_address_264",
          "address_id": "address-24",
          "name": "Karacak"
        },
        {
          "id": "sub_address_265",
          "address_id": "address-24",
          "name": "Karyasari"
        },
        {
          "id": "sub_address_266",
          "address_id": "address-24",
          "name": "Karehkel"
        },
        {
          "id": "sub_address_267",
          "address_id": "address-24",
          "name": "Leuwiliang"
        },
        {
          "id": "sub_address_268",
          "address_id": "address-24",
          "name": "Leuwimekar"
        },
        {
          "id": "sub_address_269",
          "address_id": "address-24",
          "name": "Pabangbon"
        },
        {
          "id": "sub_address_270",
          "address_id": "address-24",
          "name": "Purasari"
        },
        {
          "id": "sub_address_271",
          "address_id": "address-24",
          "name": "Puraseda"
        },
        {
          "id": "sub_address_272",
          "address_id": "address-25",
          "name": "Babakan Sadeng"
        },
        {
          "id": "sub_address_273",
          "address_id": "address-25",
          "name": "Kalong I"
        },
        {
          "id": "sub_address_274",
          "address_id": "address-25",
          "name": "Kalong II"
        },
        {
          "id": "sub_address_275",
          "address_id": "address-25",
          "name": "Leuwisadeng"
        },
        {
          "id": "sub_address_276",
          "address_id": "address-25",
          "name": "Sadeng"
        },
        {
          "id": "sub_address_277",
          "address_id": "address-25",
          "name": "Sadengkolot"
        },
        {
          "id": "sub_address_278",
          "address_id": "address-25",
          "name": "Sibanteng"
        },
        {
          "id": "sub_address_279",
          "address_id": "address-25",
          "name": "Wangun Jaya"
        },
        {
          "id": "sub_address_280",
          "address_id": "address-26",
          "name": "Cipayung"
        },
        {
          "id": "sub_address_281",
          "address_id": "address-26",
          "name": "Datar"
        },
        {
          "id": "sub_address_282",
          "address_id": "address-26",
          "name": "Cipayung Girang"
        },
        {
          "id": "sub_address_283",
          "address_id": "address-26",
          "name": "Gadog"
        },
        {
          "id": "sub_address_284",
          "address_id": "address-26",
          "name": "Kuta"
        },
        {
          "id": "sub_address_285",
          "address_id": "address-26",
          "name": "Megamendung"
        },
        {
          "id": "sub_address_286",
          "address_id": "address-26",
          "name": "Pasir Angin"
        },
        {
          "id": "sub_address_287",
          "address_id": "address-26",
          "name": "Sukagalih"
        },
        {
          "id": "sub_address_288",
          "address_id": "address-26",
          "name": "Sukakarya"
        },
        {
          "id": "sub_address_289",
          "address_id": "address-26",
          "name": "Sukamahi"
        },
        {
          "id": "sub_address_290",
          "address_id": "address-26",
          "name": "Sukamaju"
        },
        {
          "id": "sub_address_291",
          "address_id": "address-26",
          "name": "Sukamanah"
        },
        {
          "id": "sub_address_292",
          "address_id": "address-26",
          "name": "Sukaresmi"
        },
        {
          "id": "sub_address_293",
          "address_id": "address-27",
          "name": "Bantar Karet"
        },
        {
          "id": "sub_address_294",
          "address_id": "address-27",
          "name": "Batu Tulis"
        },
        {
          "id": "sub_address_295",
          "address_id": "address-27",
          "name": "Cisarua"
        },
        {
          "id": "sub_address_296",
          "address_id": "address-27",
          "name": "Curug Bitung"
        },
        {
          "id": "sub_address_297",
          "address_id": "address-27",
          "name": "Hambaro"
        },
        {
          "id": "sub_address_298",
          "address_id": "address-27",
          "name": "Kalong Liud"
        },
        {
          "id": "sub_address_299",
          "address_id": "address-27",
          "name": "Malasari"
        },
        {
          "id": "sub_address_300",
          "address_id": "address-27",
          "name": "Nanggung"
        },
        {
          "id": "sub_address_301",
          "address_id": "address-27",
          "name": "Pangkal Jaya"
        },
        {
          "id": "sub_address_302",
          "address_id": "address-27",
          "name": "Parakan Muncang"
        },
        {
          "id": "sub_address_303",
          "address_id": "address-27",
          "name": "Sukaluyu"
        },
        {
          "id": "sub_address_304",
          "address_id": "address-28",
          "name": "Ciasihan"
        },
        {
          "id": "sub_address_305",
          "address_id": "address-28",
          "name": "Ciasmara"
        },
        {
          "id": "sub_address_306",
          "address_id": "address-28",
          "name": "Cibening"
        },
        {
          "id": "sub_address_307",
          "address_id": "address-28",
          "name": "Cibitung Kulon"
        },
        {
          "id": "sub_address_308",
          "address_id": "address-28",
          "name": "Cibitung Wetan"
        },
        {
          "id": "sub_address_309",
          "address_id": "address-28",
          "name": "Cibunian"
        },
        {
          "id": "sub_address_310",
          "address_id": "address-28",
          "name": "Cimayang"
        },
        {
          "id": "sub_address_311",
          "address_id": "address-28",
          "name": "Gunung Bunder"
        },
        {
          "id": "sub_address_312",
          "address_id": "address-28",
          "name": "Gunung Bunder II"
        },
        {
          "id": "sub_address_313",
          "address_id": "address-28",
          "name": "Gunung Menyan"
        },
        {
          "id": "sub_address_314",
          "address_id": "address-28",
          "name": "Gunung Picung"
        },
        {
          "id": "sub_address_315",
          "address_id": "address-28",
          "name": "Gunung Sari"
        },
        {
          "id": "sub_address_316",
          "address_id": "address-28",
          "name": "Pamijahan"
        },
        {
          "id": "sub_address_317",
          "address_id": "address-28",
          "name": "Pasarean"
        },
        {
          "id": "sub_address_318",
          "address_id": "address-28",
          "name": "Purwabakti"
        },
        {
          "id": "sub_address_319",
          "address_id": "address-29",
          "name": "Bojong Indah"
        },
        {
          "id": "sub_address_320",
          "address_id": "address-29",
          "name": "Bojong Sempu"
        },
        {
          "id": "sub_address_321",
          "address_id": "address-29",
          "name": "Cogreg"
        },
        {
          "id": "sub_address_322",
          "address_id": "address-29",
          "name": "Iwul"
        },
        {
          "id": "sub_address_323",
          "address_id": "address-29",
          "name": "Jabon Mekar"
        },
        {
          "id": "sub_address_324",
          "address_id": "address-29",
          "name": "Pamegarsari"
        },
        {
          "id": "sub_address_325",
          "address_id": "address-29",
          "name": "Parung"
        },
        {
          "id": "sub_address_326",
          "address_id": "address-29",
          "name": "Waru"
        },
        {
          "id": "sub_address_327",
          "address_id": "address-29",
          "name": "Warujaya"
        },
        {
          "id": "sub_address_328",
          "address_id": "address-30",
          "name": "Cibunar"
        },
        {
          "id": "sub_address_329",
          "address_id": "address-30",
          "name": "Cikuda"
        },
        {
          "id": "sub_address_330",
          "address_id": "address-30",
          "name": "Dago"
        },
        {
          "id": "sub_address_331",
          "address_id": "address-30",
          "name": "Gintung"
        },
        {
          "id": "sub_address_332",
          "address_id": "address-30",
          "name": "Cilejet"
        },
        {
          "id": "sub_address_333",
          "address_id": "address-30",
          "name": "Gorowong"
        },
        {
          "id": "sub_address_334",
          "address_id": "address-30",
          "name": "Jagabaya"
        },
        {
          "id": "sub_address_335",
          "address_id": "address-30",
          "name": "Jagabita"
        },
        {
          "id": "sub_address_336",
          "address_id": "address-30",
          "name": "Kabasiran"
        },
        {
          "id": "sub_address_337",
          "address_id": "address-30",
          "name": "Lumpang"
        },
        {
          "id": "sub_address_338",
          "address_id": "address-30",
          "name": "Parungpanjang"
        },
        {
          "id": "sub_address_339",
          "address_id": "address-30",
          "name": "Pingku"
        },
        {
          "id": "sub_address_340",
          "address_id": "address-31",
          "name": "Bantarjaya"
        },
        {
          "id": "sub_address_341",
          "address_id": "address-31",
          "name": "Bantarsari"
        },
        {
          "id": "sub_address_342",
          "address_id": "address-31",
          "name": "Candali"
        },
        {
          "id": "sub_address_343",
          "address_id": "address-31",
          "name": "Cimulang"
        },
        {
          "id": "sub_address_344",
          "address_id": "address-31",
          "name": "Mekarsari"
        },
        {
          "id": "sub_address_345",
          "address_id": "address-31",
          "name": "Pasirgaok"
        },
        {
          "id": "sub_address_346",
          "address_id": "address-31",
          "name": "Rancabungur"
        },
        {
          "id": "sub_address_347",
          "address_id": "address-32",
          "name": "Cibodas"
        },
        {
          "id": "sub_address_348",
          "address_id": "address-32",
          "name": "Cidokom"
        },
        {
          "id": "sub_address_349",
          "address_id": "address-32",
          "name": "Cipinang"
        },
        {
          "id": "sub_address_350",
          "address_id": "address-32",
          "name": "Gobang"
        },
        {
          "id": "sub_address_351",
          "address_id": "address-32",
          "name": "Kampung Sawah"
        },
        {
          "id": "sub_address_352",
          "address_id": "address-32",
          "name": "Kertajaya"
        },
        {
          "id": "sub_address_353",
          "address_id": "address-32",
          "name": "Leuwibatu"
        },
        {
          "id": "sub_address_354",
          "address_id": "address-32",
          "name": "Mekar Jaya"
        },
        {
          "id": "sub_address_355",
          "address_id": "address-32",
          "name": "Mekar Sari"
        },
        {
          "id": "sub_address_356",
          "address_id": "address-32",
          "name": "Rabak"
        },
        {
          "id": "sub_address_357",
          "address_id": "address-32",
          "name": "Rumpin"
        },
        {
          "id": "sub_address_358",
          "address_id": "address-32",
          "name": "Sukamulya"
        },
        {
          "id": "sub_address_359",
          "address_id": "address-32",
          "name": "Sukasari"
        },
        {
          "id": "sub_address_360",
          "address_id": "address-32",
          "name": "Taman Sari"
        },
        {
          "id": "sub_address_361",
          "address_id": "address-33",
          "name": "Cileuksa"
        },
        {
          "id": "sub_address_362",
          "address_id": "address-33",
          "name": "Cisarua"
        },
        {
          "id": "sub_address_363",
          "address_id": "address-33",
          "name": "Harkatjaya"
        },
        {
          "id": "sub_address_364",
          "address_id": "address-33",
          "name": "Kiarapandak"
        },
        {
          "id": "sub_address_365",
          "address_id": "address-33",
          "name": "Kiarasari"
        },
        {
          "id": "sub_address_366",
          "address_id": "address-33",
          "name": "Pasir Madang"
        },
        {
          "id": "sub_address_367",
          "address_id": "address-33",
          "name": "Sipayung"
        },
        {
          "id": "sub_address_368",
          "address_id": "address-33",
          "name": "Sukaraja"
        },
        {
          "id": "sub_address_369",
          "address_id": "address-33",
          "name": "Sukamulih"
        },
        {
          "id": "sub_address_370",
          "address_id": "address-33",
          "name": "Jaya Raharja"
        },
        {
          "id": "sub_address_371",
          "address_id": "address-33",
          "name": "Urug"
        },
        {
          "id": "sub_address_372",
          "address_id": "address-34",
          "name": "Cibadak"
        },
        {
          "id": "sub_address_373",
          "address_id": "address-34",
          "name": "Pabuaran"
        },
        {
          "id": "sub_address_374",
          "address_id": "address-34",
          "name": "Sirnajaya"
        },
        {
          "id": "sub_address_375",
          "address_id": "address-34",
          "name": "Sukadamai"
        },
        {
          "id": "sub_address_376",
          "address_id": "address-34",
          "name": "Sukaharja"
        },
        {
          "id": "sub_address_377",
          "address_id": "address-34",
          "name": "Sukamakmur"
        },
        {
          "id": "sub_address_378",
          "address_id": "address-34",
          "name": "Sukamulya"
        },
        {
          "id": "sub_address_379",
          "address_id": "address-34",
          "name": "Sukaresmi"
        },
        {
          "id": "sub_address_380",
          "address_id": "address-34",
          "name": "Sukawangi"
        },
        {
          "id": "sub_address_381",
          "address_id": "address-34",
          "name": "Wargajaya"
        },
        {
          "id": "sub_address_382",
          "address_id": "address-35",
          "name": "Cadas"
        },
        {
          "id": "sub_address_383",
          "address_id": "address-35",
          "name": "Ngampar"
        },
        {
          "id": "sub_address_384",
          "address_id": "address-35",
          "name": "Cibanon"
        },
        {
          "id": "sub_address_385",
          "address_id": "address-35",
          "name": "Cijujung"
        },
        {
          "id": "sub_address_386",
          "address_id": "address-35",
          "name": "Cikeas"
        },
        {
          "id": "sub_address_387",
          "address_id": "address-35",
          "name": "Cilebut Barat"
        },
        {
          "id": "sub_address_388",
          "address_id": "address-35",
          "name": "Cilebut Timur"
        },
        {
          "id": "sub_address_389",
          "address_id": "address-35",
          "name": "Cimandala"
        },
        {
          "id": "sub_address_390",
          "address_id": "address-35",
          "name": "Gunung Geulis"
        },
        {
          "id": "sub_address_391",
          "address_id": "address-35",
          "name": "Nagrak"
        },
        {
          "id": "sub_address_392",
          "address_id": "address-35",
          "name": "Pasir Jambu"
        },
        {
          "id": "sub_address_393",
          "address_id": "address-35",
          "name": "Pasirlaja"
        },
        {
          "id": "sub_address_394",
          "address_id": "address-35",
          "name": "Sukaraja"
        },
        {
          "id": "sub_address_395",
          "address_id": "address-35",
          "name": "Sukatani"
        },
        {
          "id": "sub_address_396",
          "address_id": "address-36",
          "name": "Citayam"
        },
        {
          "id": "sub_address_397",
          "address_id": "address-36",
          "name": "Kalisuren"
        },
        {
          "id": "sub_address_398",
          "address_id": "address-36",
          "name": "Nanggerang"
        },
        {
          "id": "sub_address_399",
          "address_id": "address-36",
          "name": "Sasak Panjang"
        },
        {
          "id": "sub_address_400",
          "address_id": "address-36",
          "name": "Sukmajaya"
        },
        {
          "id": "sub_address_401",
          "address_id": "address-36",
          "name": "Tajur Halang"
        },
        {
          "id": "sub_address_402",
          "address_id": "address-36",
          "name": "Tonjong"
        },
        {
          "id": "sub_address_403",
          "address_id": "address-37",
          "name": "Pasireurih"
        },
        {
          "id": "sub_address_404",
          "address_id": "address-37",
          "name": "Sirnagalih"
        },
        {
          "id": "sub_address_405",
          "address_id": "address-37",
          "name": "Sukajadi"
        },
        {
          "id": "sub_address_406",
          "address_id": "address-37",
          "name": "Sukajaya"
        },
        {
          "id": "sub_address_407",
          "address_id": "address-37",
          "name": "Sukaluyu"
        },
        {
          "id": "sub_address_408",
          "address_id": "address-37",
          "name": "Sukamantri"
        },
        {
          "id": "sub_address_409",
          "address_id": "address-37",
          "name": "Sukaresmi"
        },
        {
          "id": "sub_address_410",
          "address_id": "address-37",
          "name": "Tamansari"
        },
        {
          "id": "sub_address_411",
          "address_id": "address-38",
          "name": "Antajaya"
        },
        {
          "id": "sub_address_412",
          "address_id": "address-38",
          "name": "Buanajaya"
        },
        {
          "id": "sub_address_413",
          "address_id": "address-38",
          "name": "Cibadak"
        },
        {
          "id": "sub_address_414",
          "address_id": "address-38",
          "name": "Pasir Tanjung"
        },
        {
          "id": "sub_address_415",
          "address_id": "address-38",
          "name": "Selawangi"
        },
        {
          "id": "sub_address_416",
          "address_id": "address-38",
          "name": "Sirnarasa"
        },
        {
          "id": "sub_address_417",
          "address_id": "address-38",
          "name": "Sirnasari"
        },
        {
          "id": "sub_address_418",
          "address_id": "address-38",
          "name": "Sukarasa"
        },
        {
          "id": "sub_address_419",
          "address_id": "address-38",
          "name": "Tanjungrasa"
        },
        {
          "id": "sub_address_420",
          "address_id": "address-38",
          "name": "Tanjungsari"
        },
        {
          "id": "sub_address_421",
          "address_id": "address-39",
          "name": "Babakan"
        },
        {
          "id": "sub_address_422",
          "address_id": "address-39",
          "name": "Batok"
        },
        {
          "id": "sub_address_423",
          "address_id": "address-39",
          "name": "Bojong"
        },
        {
          "id": "sub_address_424",
          "address_id": "address-39",
          "name": "Cilaku"
        },
        {
          "id": "sub_address_425",
          "address_id": "address-39",
          "name": "Ciomas"
        },
        {
          "id": "sub_address_426",
          "address_id": "address-39",
          "name": "Singabangsa"
        },
        {
          "id": "sub_address_427",
          "address_id": "address-39",
          "name": "Singabraja"
        },
        {
          "id": "sub_address_428",
          "address_id": "address-39",
          "name": "Tapos"
        },
        {
          "id": "sub_address_429",
          "address_id": "address-39",
          "name": "Tenjo"
        },
        {
          "id": "sub_address_430",
          "address_id": "address-40",
          "name": "Cibitung Tengah"
        },
        {
          "id": "sub_address_431",
          "address_id": "address-40",
          "name": "Cinangneng"
        },
        {
          "id": "sub_address_432",
          "address_id": "address-40",
          "name": "Gunung Malang"
        },
        {
          "id": "sub_address_433",
          "address_id": "address-40",
          "name": "Gunung Mulya"
        },
        {
          "id": "sub_address_434",
          "address_id": "address-40",
          "name": "Situ Daun"
        },
        {
          "id": "sub_address_435",
          "address_id": "address-40",
          "name": "Tapos 1"
        },
        {
          "id": "sub_address_436",
          "address_id": "address-40",
          "name": "Tapos 2"
        }
    ],
    "distance": [
        {
            "distance_id": "distance-1",
            "school_id": "school-1",
            "priority_1": "address-1",
            "priority_2": ["address-16", "address-35", "address-26", "address-34"]
        },
        {
            "distance_id": "distance-2",
            "school_id": "school-2",
            "priority_1": "address-2",
            "priority_2": ["address-36", "address-7", "address-35"]
        },
        {
            "distance_id": "distance-3",
            "school_id": "school-3",
            "priority_1": "address-2",
            "priority_2": ["address-36", "address-7", "address-35"]
        },
        {
            "distance_id": "distance-4",
            "school_id": "school-4",
            "priority_1": "address-3",
            "priority_2": ["address-6", "address-9", "address-11"]
        },
        {
            "distance_id": "distance-5",
            "school_id": "school-5",
            "priority_1": "address-4",
            "priority_2": ["address-21", "address-38", "address-34"]
        },
        {
            "distance_id": "distance-6",
            "school_id": "school-6",
            "priority_1": "address-4",
            "priority_2": ["address-21", "address-38", "address-34"]
        },
        {
            "distance_id": "distance-7",
            "school_id": "school-7",
            "priority_1": "address-5",
            "priority_2": ["address-17", "address-8", "address-40"]
        },
        {
            "distance_id": "distance-8",
            "school_id": "school-8",
            "priority_1": "address-6",
            "priority_2": ["address-3", "address-26", "address-14"]
        },
        {
            "distance_id": "distance-9",
            "school_id": "school-9",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-10",
            "school_id": "school-10",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-11",
            "school_id": "school-11",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-12",
            "school_id": "school-12",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-13",
            "school_id": "school-13",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-14",
            "school_id": "school-14",
            "priority_1": "address-7",
            "priority_2": ["address-35", "address-2", "address-16"]
        },
        {
            "distance_id": "distance-15",
            "school_id": "school-15",
            "priority_1": "address-8",
            "priority_2": ["address-5", "address-32", "address-24", "address-28"]
        },
        {
            "distance_id": "distance-16",
            "school_id": "school-16",
            "priority_1": "address-9",
            "priority_2": ["address-11", "address-3"]
        },
        {
            "distance_id": "distance-17",
            "school_id": "school-17",
            "priority_1": "address-10",
            "priority_2": ["address-20", "address-32", "address-30", "address-39", "address-33", "address-27", "address-25"]
        },
        {
            "distance_id": "distance-18",
            "school_id": "school-18",
            "priority_1": "address-11",
            "priority_2": ["address-9", "address-3", "address-37"]
        },
        {
            "distance_id": "distance-19",
            "school_id": "school-19",
            "priority_1": "address-12",
            "priority_2": ["address-23", "address-19", "address-21", "address-34"]
        },
        {
            "distance_id": "distance-20",
            "school_id": "school-20",
            "priority_1": "address-12",
            "priority_2": ["address-23", "address-19", "address-21", "address-34"]
        },
        {
            "distance_id": "distance-21",
            "school_id": "school-21",
            "priority_1": "address-12",
            "priority_2": ["address-23", "address-19", "address-21", "address-34"]
        },
        {
            "distance_id": "distance-22",
            "school_id": "school-22",
            "priority_1": "address-13",
            "priority_2": ["address-37", "address-17"]
        },
        {
            "distance_id": "distance-23",
            "school_id": "school-23",
            "priority_1": "address-13",
            "priority_2": ["address-37", "address-17"]
        },
        {
            "distance_id": "distance-24",
            "school_id": "school-24",
            "priority_1": "address-14",
            "priority_2": ["address-26", "address-6"]
        },
        {
            "distance_id": "distance-25",
            "school_id": "school-25",
            "priority_1": "address-14",
            "priority_2": ["address-26", "address-6"]
        },
        {
            "distance_id": "distance-26",
            "school_id": "school-26",
            "priority_1": "address-15",
            "priority_2": ["address-32", "address-31", "address-29", "address-18", "address-22"]
        },
        {
            "distance_id": "distance-27",
            "school_id": "school-27",
            "priority_1": "address-16",
            "priority_2": ["address-1", "address-7", "address-23", "address-34"]
        },
        {
            "distance_id": "distance-28",
            "school_id": "school-28",
            "priority_1": "address-17",
            "priority_2": ["address-40", "address-13", "address-37", "address-31", "address-5"]
        },
        {
            "distance_id": "distance-29",
            "school_id": "school-29",
            "priority_1": "address-18",
            "priority_2": ["address-32", "address-15", "address-29"]
        },
        {
            "distance_id": "distance-30",
            "school_id": "school-30",
            "priority_1": "address-18",
            "priority_2": ["address-32", "address-15", "address-29"]
        },
        {
            "distance_id": "distance-31",
            "school_id": "school-31",
            "priority_1": "address-19",
            "priority_2": ["address-23", "address-12", "address-16"]
        },
        {
            "distance_id": "distance-32",
            "school_id": "school-32",
            "priority_1": "address-19",
            "priority_2": ["address-23", "address-12", "address-16"]
        },
        {
            "distance_id": "distance-33",
            "school_id": "school-33",
            "priority_1": "address-19",
            "priority_2": ["address-23", "address-12", "address-16"]
        },
        {
            "distance_id": "distance-34",
            "school_id": "school-34",
            "priority_1": "address-20",
            "priority_2": ["address-39", "address-35"]
        },
        {
            "distance_id": "distance-35",
            "school_id": "school-35",
            "priority_1": "address-21",
            "priority_2": ["address-34", "address-4", "address-12", "address-23"]
        },
        {
            "distance_id": "distance-36",
            "school_id": "school-36",
            "priority_1": "address-21",
            "priority_2": ["address-34", "address-4", "address-12", "address-23"]
        },
        {
            "distance_id": "distance-37",
            "school_id": "school-37",
            "priority_1": "address-22",
            "priority_2": ["address-31", "address-15", "address-36", "address-29"]
        },
        {
            "distance_id": "distance-38",
            "school_id": "school-38",
            "priority_1": "address-23",
            "priority_2": ["address-19", "address-12", "address-21", "address-34"]
        },
        {
            "distance_id": "distance-39",
            "school_id": "school-39",
            "priority_1": "address-24",
            "priority_2": ["address-25", "address-8", "address-27", "address-28", "address-32"]
        },
        {
            "distance_id": "distance-40",
            "school_id": "school-40",
            "priority_1": "address-24",
            "priority_2": ["address-25", "address-8", "address-27", "address-28", "address-32"]
        },
        {
            "distance_id": "distance-41",
            "school_id": "school-41",
            "priority_1": "address-25",
            "priority_2": ["address-24", "address-27", "address-32", "address-10"]
        },
        {
            "distance_id": "distance-42",
            "school_id": "school-42",
            "priority_1": "address-26",
            "priority_2": ["address-14", "address-6", "address-1"]
        },
        {
            "distance_id": "distance-43",
            "school_id": "school-43",
            "priority_1": "address-27",
            "priority_2": ["address-33", "address-25", "address-24", "address-10"]
        },
        {
            "distance_id": "distance-44",
            "school_id": "school-44",
            "priority_1": "address-28",
            "priority_2": ["address-40", "address-5", "address-8", "address-24"]
        },
        {
            "distance_id": "distance-45",
            "school_id": "school-45",
            "priority_1": "address-29",
            "priority_2": ["address-15", "address-18", "address-36", "address-22"]
        },
        {
            "distance_id": "distance-46",
            "school_id": "school-46",
            "priority_1": "address-30",
            "priority_2": ["address-39", "address-32", "address-10", "address-15", "address-31", "address-24", "address-25", "address-8", "address-10"]
        },
        {
            "distance_id": "distance-47",
            "school_id": "school-47",
            "priority_1": "address-31",
            "priority_2": ["address-22", "address-15", "address-5", "address-17"]
        },
        {
            "distance_id": "distance-48",
            "school_id": "school-48",
            "priority_1": "address-32",
            "priority_2": ["address-30", "address-18", "address-15", "address-31", "address-24", "address-25", "address-8", "address-10"]
        },
        {
            "distance_id": "distance-49",
            "school_id": "school-49",
            "priority_1": "address-33",
            "priority_2": ["address-20", "address-27", "address-10"]
        },
        {
            "distance_id": "distance-50",
            "school_id": "school-50",
            "priority_1": "address-34",
            "priority_2": ["address-16", "address-23", "address-21", "address-4", "address-38", "address-1", "address-26"]
        },
        {
            "distance_id": "distance-51",
            "school_id": "school-51",
            "priority_1": "address-35",
            "priority_2": ["address-2", "address-7", "address-26", "address-1", "address-23", "address-21", "address-4", "address-38", "address-1", "address-26"]
        },
        {
            "distance_id": "distance-52",
            "school_id": "school-52",
            "priority_1": "address-36",
            "priority_2": ["address-2", "address-22", "address-2", "address-23", "address-21", "address-4", "address-38", "address-1", "address-26"]
        },
        {
            "distance_id": "distance-53",
            "school_id": "school-53",
            "priority_1": "address-37",
            "priority_2": ["address-40", "address-17", "address-13", "address-11"]
        },
        {
            "distance_id": "distance-54",
            "school_id": "school-54",
            "priority_1": "address-37",
            "priority_2": ["address-34", "address-4", "address-23", "address-21", "address-4", "address-38", "address-1", "address-26"]
        },
        {
            "distance_id": "distance-55",
            "school_id": "school-55",
            "priority_1": "address-39",
            "priority_2": ["address-30", "address-20", "address-10"]
        },
        {
            "distance_id": "distance-56",
            "school_id": "school-56",
            "priority_1": "address-40",
            "priority_2": ["address-28", "address-5", "address-17", "address-37"]
        },
        {
            "distance_id": "distance-57",
            "school_id": "school-57",
            "priority_1": "address-7",
            "priority_2": ["address-32", "address-15", "address-29", "address-32"]
        },
        {
            "distance_id": "distance-58",
            "school_id": "school-58",
            "priority_1": "address-25",
            "priority_2": ["address-24", "address-27", "address-32", "address-10"]
        },
        {
            "distance_id": "distance-59",
            "school_id": "school-59",
            "priority_1": "address-21",
            "priority_2": ["address-34", "address-4", "address-23", "address-12"]
        },
        {
            "distance_id": "distance-60",
            "school_id": "school-60",
            "priority_1": "address-30",
            "priority_2": ["address-32", "address-39", "address-10"]
        }
    ],
    "zonation": [
        {
            "id": "zonation-1",
            "name": 'A',
            "address": [
                'address-7',
                'address-16',
                'address-35',
                'address-1'
            ]
        },
        {
            "id": "zonation-2",
            "name": 'B',
            "address": [
                'address-12',
                'address-19',
                'address-23',
                'address-21',
                'address-4',
                'address-34',
                'address-38',
            ]
        },
        {
            "id": "zonation-3",
            "name": 'C',
            "address": [
                'address-20',
                'address-33',
                'address-39',
                'address-10',
                'address-29',
                'address-24',
                'address-25',
                'address-27',
                'address-8',
                'address-28',
            ]
        },
        {
            "id": "zonation-4",
            "name": 'D',
            "address": [
                'address-17',
                'address-13',
                'address-5',
                'address-40',
                'address-37',
                'address-6',
                'address-26',
                'address-14',
                'address-3',
                'address-9',
                'address-11',
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