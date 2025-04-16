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
            "name": "SMA PELITA HARAPAN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/8EFC53307E62178D9859"
        },
        {
            "school_id": "school-37",
            "name": "SMA TARUNA BANGSA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/E3E6C063181BA27349E5"
        },
        {
            "school_id": "school-38",
            "name": "SMA NASIONAL PLUS BPK PENABUR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/C01C525831E737AAC904"
        },
        {
            "school_id": "school-39",
            "name": "SMA Sampoerna",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DB972C86F7A3807139AD"
        },
        {
            "school_id": "school-40",
            "name": "SMA INSAN CENDEKIA BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/B1FF7F4A7F2EC5B1BBF1"
        },
        {
            "school_id": "school-41",
            "name": "SMK PGRI BABAKANMADANG",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/93FD48E3DC78D74ED6D1"
        },
        {
            "school_id": "school-42",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK AL - MUTTAQIEN\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/5BE949CB54B8D779A26B",
            "link_profile": ""
        },
        {
            "school_id": "school-43",
            "name": "MA AL-BASIT",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/2C945260-BBED-40CB-9DE3-795F8ED92B28"
        },
        {
            "school_id": "school-44",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMA LOGOS\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "sma",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/96AB0514D352AF941905",
            "link_profile": ""
        },
        {
            "school_id": "school-45",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK AL BASYARIAH\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/70709714F4D677FF43DB",
            "link_profile": ""
        },
        {
            "school_id": "school-46",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK WIRABUANA 1\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/81AA5CC9ABBFD2616A39",
            "link_profile": ""
        },
        {
            "school_id": "school-47",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK WIRABUANA 2\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/ABAC888BE5CD31C281C5",
            "link_profile": ""
        },
        {
            "school_id": "school-48",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK PARIWISATA CITAYAM\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/51E1AA43D26F1CA32D0A",
            "link_profile": ""
        },
        {
            "school_id": "school-49",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK MANDIRI\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/ECBDBF575D8DEBCC93AC",
            "link_profile": ""
        },
        {
            "school_id": "school-50",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK MEDIA TEKNOLOGI\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/5CD5B62E37B993C0AAD2",
            "link_profile": ""
        },
        {
            "school_id": "school-51",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK KESEHATAN LOGOS\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/5BC34EBD6EC0F354BA5D",
            "link_profile": ""
        },
        {
            "school_id": "school-52",
            "name": "SMA DARUL FAIZIN",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/6CB1EA0F1356A5AD1F23"
        },
        {
            "school_id": "school-53",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK FARMAKO MEDIKA PLUS\"",
            "name": "A",
            "akreditas": "memadai",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/2BE1B7B430DD5DA3210F",
            "link_profile": ""
        },
        {
            "school_id": "school-54",
            "name": "MA AL ASMAAUL HUSNA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70037039"
        },
        {
            "school_id": "school-55",
            "name": "MA AL-MUCHTARI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70028616"
        },
        {
            "school_id": "school-56",
            "name": "MAGHFIRAH ISLAMIC LEADERSHIP BOARDING SCHOOL",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/70028615"
        },
        {
            "school_id": "school-57",
            "name": "MAS TARBIYATUL HUDA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280174"
        },
        {
            "school_id": "school-58",
            "name": "SMK IT AR-RISALAH CARIU",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/1CC61B1EA6CCF7547CD1"
        },
        {
            "school_id": "school-59",
            "name": "SMAS DARUTAFSIR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/47CE9B4B4F0876DD794F"
        },
        {
            "school_id": "school-60",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMK TI Bazma\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/A29037D2780334B811F7",
            "link_profile": ""
        },
        {
            "school_id": "school-61",
            "name": "",
            "akreditas": "",
            "fasilitas": "",
            "type": "",
            "category": "",
            "link_profile": ""
        },
        {
            "school_id": "SMKS GEO INFORMATIKA\"",
            "name": "A",
            "akreditas": "kurang",
            "fasilitas": "smk",
            "type": "swasta",
            "category": "https://dapo.dikdasmen.go.id/sekolah/BFA631AE2B5AF218511E",
            "link_profile": ""
        },
        {
            "school_id": "school-62",
            "name": "SMKS PELITA CIAMPEA 1",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/8801149BBABAE11C2718"
        },
        {
            "school_id": "school-63",
            "name": "SMKS PELITA CIAMPEA 2",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/41395E2EEE05A7010700"
        },
        {
            "school_id": "school-64",
            "name": "MAS DARUL FALLAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280136"
        },
        {
            "school_id": "school-65",
            "name": "MAS DARUT TAFSIR",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "ma",
            "category": "swasta",
            "link_profile": "https://referensi.data.kemdikbud.go.id/pendidikan/npsn/20280145"
        },
        {
            "school_id": "school-66",
            "name": "SMAS AMALIAH",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/89EFC4CB0F7C9028AC31"
        },
        {
            "school_id": "school-67",
            "name": "SMAS FATHAN MUBINA",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/BA27B0186B9DD91C2A4D"
        },
        {
            "school_id": "school-68",
            "name": "SMAS PGRI CIAWI",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/DA319CEA523813BCCADF"
        },
        {
            "school_id": "school-69",
            "name": "SMAS PURWA BHAKTI",
            "akreditas": "A",
            "fasilitas": "kurang",
            "type": "sma",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/9910E2A6CBCF29B2E84C"
        },
        {
            "school_id": "school-70",
            "name": "SMKS AMALIAH 1",
            "akreditas": "A",
            "fasilitas": "memadai",
            "type": "smk",
            "category": "swasta",
            "link_profile": "https://dapo.dikdasmen.go.id/sekolah/61E2ADFD5AEA82C877AC"
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
      }
    ],
    "sub_address": [
      {
          "id": "sub-address-1",
          "address-id": "address-1",
          "name": "Babakan Madang"
      },
      {
          "id": "sub-address-2",
          "address-id": "address-2",
          "name": "Cimanggis"
      },
      {
          "id": "sub-address-3",
          "address-id": "address-3",
          "name": "Cimande Hilir"
      },
      {
          "id": "sub-address-4",
          "address-id": "address-4",
          "name": "Cariu"
      },
      {
          "id": "sub-address-5",
          "address-id": "address-4",
          "name": "Babakan Raden"
      },
      {
          "id": "sub-address-6",
          "address-id": "address-5",
          "name": "Cibadak"
      },
      {
          "id": "sub-address-7",
          "address-id": "address-6",
          "name": "Banjar Waru"
      },
      {
          "id": "sub-address-8",
          "address-id": "address-7",
          "name": "Ciriung"
      },
      {
          "id": "sub-address-9",
          "address-id": "address-7",
          "name": "Karadenan"
      },
      {
          "id": "sub-address-10",
          "address-id": "address-7",
          "name": "Nanggewer"
      },
      {
          "id": "sub-address-11",
          "address-id": "address-7",
          "name": "Cibinong"
      },
      {
          "id": "sub-address-12",
          "address-id": "address-8",
          "name": "Cibatok 1"
      },
      {
          "id": "sub-address-13",
          "address-id": "address-9",
          "name": "Wates Jaya"
      },
      {
          "id": "sub-address-14",
          "address-id": "address-10",
          "name": "Cigudeg"
      },
      {
          "id": "sub-address-15",
          "address-id": "address-11",
          "name": "Cijeruk"
      },
      {
          "id": "sub-address-16",
          "address-id": "address-12",
          "name": "Cileungsi"
      },
      {
          "id": "sub-address-17",
          "address-id": "address-12",
          "name": "Cipenjo"
      },
      {
          "id": "sub-address-18",
          "address-id": "address-12",
          "name": "Limus Nunggal"
      },
      {
          "id": "sub-address-19",
          "address-id": "address-13",
          "name": "Sukaharja"
      },
      {
          "id": "sub-address-20",
          "address-id": "address-13",
          "name": "Laladon"
      },
      {
          "id": "sub-address-21",
          "address-id": "address-14",
          "name": "Leuwimalang"
      },
      {
          "id": "sub-address-22",
          "address-id": "address-14",
          "name": "Tugu Selatan"
      },
      {
          "id": "sub-address-23",
          "address-id": "address-15",
          "name": "Putat Nutug"
      },
      {
          "id": "sub-address-24",
          "address-id": "address-16",
          "name": "Tarikolot"
      },
      {
          "id": "sub-address-25",
          "address-id": "address-17",
          "name": "Dramaga"
      },
      {
          "id": "sub-address-26",
          "address-id": "address-18",
          "name": "Gunung Sindur"
      },
      {
          "id": "sub-address-27",
          "address-id": "address-18",
          "name": "Rawakalong"
      },
      {
          "id": "sub-address-28",
          "address-id": "address-19",
          "name": "Bojong Nangka"
      },
      {
          "id": "sub-address-29",
          "address-id": "address-19",
          "name": "Ciangsana"
      },
      {
          "id": "sub-address-30",
          "address-id": "address-19",
          "name": "Wanaherang"
      },
      {
          "id": "sub-address-31",
          "address-id": "address-20",
          "name": "Setu"
      },
      {
          "id": "sub-address-32",
          "address-id": "address-21",
          "name": "Sukasirna"
      },
      {
          "id": "sub-address-33",
          "address-id": "address-1",
          "name": "Sentul"
      },
      {
          "id": "sub-address-34",
          "address-id": "address-1",
          "name": "Citaringgul"
      },
      {
          "id": "sub-address-35",
          "address-id": "address-1",
          "name": "Cijayanti"
      },
      {
          "id": "sub-address-36",
          "address-id": "address-1",
          "name": "Kadumangu"
      },
      {
          "id": "sub-address-37",
          "address-id": "address-2",
          "name": "Pabuaran"
      },
      {
          "id": "sub-address-38",
          "address-id": "address-2",
          "name": "Rawa Panjang"
      },
      {
          "id": "sub-address-39",
          "address-id": "address-2",
          "name": "Bojong Gede"
      },
      {
          "id": "sub-address-40",
          "address-id": "address-2",
          "name": "Pabuaran"
      },
      {
          "id": "sub-address-41",
          "address-id": "address-3",
          "name": "Caringin"
      },
      {
          "id": "sub-address-42",
          "address-id": "address-3",
          "name": "Lemah Duhur"
      },
      {
          "id": "sub-address-43",
          "address-id": "address-3",
          "name": "Tangkil"
      },
      {
          "id": "sub-address-44",
          "address-id": "address-3",
          "name": "Pancawati"
      },
      {
          "id": "sub-address-45",
          "address-id": "address-4",
          "name": "Tegal Panjang"
      },
      {
          "id": "sub-address-46",
          "address-id": "address-5",
          "name": "Cibanteng"
      },
      {
          "id": "sub-address-47",
          "address-id": "address-5",
          "name": "Cicadas"
      },
      {
          "id": "sub-address-48",
          "address-id": "address-5",
          "name": "Cihideung Ilir"
      },
      {
          "id": "sub-address-49",
          "address-id": "address-5",
          "name": "Benteng"
      },
      {
          "id": "sub-address-50",
          "address-id": "address-5",
          "name": "Ciempa"
      },
      {
          "id": "sub-address-51",
          "address-id": "address-5",
          "name": "Cibenteng"
      },
      {
          "id": "sub-address-52",
          "address-id": "address-6",
          "name": "Ciawi"
      },
      {
          "id": "sub-address-53",
          "address-id": "address-6",
          "name": "Banjar Sari"
      },
      {
          "id": "sub-address-54",
          "address-id": "address-6",
          "name": "Banjar Wangi"
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
          "priority_3": "sub-address-2"
      },
      {
          "id": "distance-3",
          "school_id": "school-3",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-2"
      },
      {
          "id": "distance-4",
          "school_id": "school-4",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-3"
      },
      {
          "id": "distance-5",
          "school_id": "school-5",
          "priority_1": "zonation-2",
          "priority_2": "address-4",
          "priority_3": "sub-address-4"
      },
      {
          "id": "distance-6",
          "school_id": "school-6",
          "priority_1": "zonation-2",
          "priority_2": "address-4",
          "priority_3": "sub-address-5"
      },
      {
          "id": "distance-7",
          "school_id": "school-7",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-6"
      },
      {
          "id": "distance-8",
          "school_id": "school-8",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-7"
      },
      {
          "id": "distance-9",
          "school_id": "school-9",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-8"
      },
      {
          "id": "distance-10",
          "school_id": "school-10",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-9"
      },
      {
          "id": "distance-11",
          "school_id": "school-11",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-10"
      },
      {
          "id": "distance-12",
          "school_id": "school-12",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-11"
      },
      {
          "id": "distance-13",
          "school_id": "school-13",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-9"
      },
      {
          "id": "distance-14",
          "school_id": "school-14",
          "priority_1": "zonation-1",
          "priority_2": "address-7",
          "priority_3": "sub-address-9"
      },
      {
          "id": "distance-15",
          "school_id": "school-15",
          "priority_1": "zonation-3",
          "priority_2": "address-8",
          "priority_3": "sub-address-12"
      },
      {
          "id": "distance-16",
          "school_id": "school-16",
          "priority_1": "zonation-4",
          "priority_2": "address-9",
          "priority_3": "sub-address-13"
      },
      {
          "id": "distance-17",
          "school_id": "school-17",
          "priority_1": "zonation-3",
          "priority_2": "address-10",
          "priority_3": "sub-address-14"
      },
      {
          "id": "distance-18",
          "school_id": "school-18",
          "priority_1": "zonation-4",
          "priority_2": "address-11",
          "priority_3": "sub-address-15"
      },
      {
          "id": "distance-19",
          "school_id": "school-19",
          "priority_1": "zonation-2",
          "priority_2": "address-12",
          "priority_3": "sub-address-16"
      },
      {
          "id": "distance-20",
          "school_id": "school-20",
          "priority_1": "zonation-2",
          "priority_2": "address-12",
          "priority_3": "sub-address-17"
      },
      {
          "id": "distance-21",
          "school_id": "school-21",
          "priority_1": "zonation-2",
          "priority_2": "address-12",
          "priority_3": "sub-address-18"
      },
      {
          "id": "distance-22",
          "school_id": "school-22",
          "priority_1": "zonation-4",
          "priority_2": "address-13",
          "priority_3": "sub-address-19"
      },
      {
          "id": "distance-23",
          "school_id": "school-23",
          "priority_1": "zonation-4",
          "priority_2": "address-13",
          "priority_3": "sub-address-20"
      },
      {
          "id": "distance-24",
          "school_id": "school-24",
          "priority_1": "zonation-4",
          "priority_2": "address-14",
          "priority_3": "sub-address-21"
      },
      {
          "id": "distance-25",
          "school_id": "school-25",
          "priority_1": "zonation-4",
          "priority_2": "address-14",
          "priority_3": "sub-address-22"
      },
      {
          "id": "distance-26",
          "school_id": "school-26",
          "priority_1": "zonation-5",
          "priority_2": "address-15",
          "priority_3": "sub-address-23"
      },
      {
          "id": "distance-27",
          "school_id": "school-27",
          "priority_1": "zonation-1",
          "priority_2": "address-16",
          "priority_3": "sub-address-24"
      },
      {
          "id": "distance-28",
          "school_id": "school-28",
          "priority_1": "zonation-4",
          "priority_2": "address-17",
          "priority_3": "sub-address-25"
      },
      {
          "id": "distance-29",
          "school_id": "school-29",
          "priority_1": "zonation-5",
          "priority_2": "address-18",
          "priority_3": "sub-address-26"
      },
      {
          "id": "distance-30",
          "school_id": "school-30",
          "priority_1": "zonation-5",
          "priority_2": "address-18",
          "priority_3": "sub-address-27"
      },
      {
          "id": "distance-31",
          "school_id": "school-31",
          "priority_1": "zonation-2",
          "priority_2": "address-19",
          "priority_3": "sub-address-28"
      },
      {
          "id": "distance-32",
          "school_id": "school-32",
          "priority_1": "zonation-2",
          "priority_2": "address-19",
          "priority_3": "sub-address-29"
      },
      {
          "id": "distance-33",
          "school_id": "school-33",
          "priority_1": "zonation-2",
          "priority_2": "address-19",
          "priority_3": "sub-address-30"
      },
      {
          "id": "distance-34",
          "school_id": "school-34",
          "priority_1": "zonation-3",
          "priority_2": "address-20",
          "priority_3": "sub-address-31"
      },
      {
          "id": "distance-35",
          "school_id": "school-35",
          "priority_1": "zonation-2",
          "priority_2": "address-21",
          "priority_3": "sub-address-32"
      },
      {
          "id": "distance-36",
          "school_id": "school-36",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-33"
      },
      {
          "id": "distance-37",
          "school_id": "school-37",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-1"
      },
      {
          "id": "distance-38",
          "school_id": "school-38",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-34"
      },
      {
          "id": "distance-39",
          "school_id": "school-39",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-35"
      },
      {
          "id": "distance-40",
          "school_id": "school-40",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-36"
      },
      {
          "id": "distance-41",
          "school_id": "school-41",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-1"
      },
      {
          "id": "distance-42",
          "school_id": "school-42",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-35"
      },
      {
          "id": "distance-43",
          "school_id": "school-43",
          "priority_1": "zonation-1",
          "priority_2": "address-1",
          "priority_3": "sub-address-35"
      },
      {
          "id": "distance-44",
          "school_id": "school-44",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-37"
      },
      {
          "id": "distance-45",
          "school_id": "school-45",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-38"
      },
      {
          "id": "distance-46",
          "school_id": "school-46",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-37"
      },
      {
          "id": "distance-47",
          "school_id": "school-47",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-37"
      },
      {
          "id": "distance-48",
          "school_id": "school-48",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-37"
      },
      {
          "id": "distance-49",
          "school_id": "school-49",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-39"
      },
      {
          "id": "distance-50",
          "school_id": "school-50",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-40"
      },
      {
          "id": "distance-51",
          "school_id": "school-51",
          "priority_1": "zonation-5",
          "priority_2": "address-2",
          "priority_3": "sub-address-40"
      },
      {
          "id": "distance-52",
          "school_id": "school-52",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-41"
      },
      {
          "id": "distance-53",
          "school_id": "school-53",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-42"
      },
      {
          "id": "distance-54",
          "school_id": "school-54",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-42"
      },
      {
          "id": "distance-55",
          "school_id": "school-55",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-42"
      },
      {
          "id": "distance-56",
          "school_id": "school-56",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-43"
      },
      {
          "id": "distance-57",
          "school_id": "school-57",
          "priority_1": "zonation-4",
          "priority_2": "address-3",
          "priority_3": "sub-address-44"
      },
      {
          "id": "distance-58",
          "school_id": "school-58",
          "priority_1": "zonation-2",
          "priority_2": "address-4",
          "priority_3": "sub-address-45"
      },
      {
          "id": "distance-59",
          "school_id": "school-59",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-46"
      },
      {
          "id": "distance-60",
          "school_id": "school-60",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-47"
      },
      {
          "id": "distance-61",
          "school_id": "school-61",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-48"
      },
      {
          "id": "distance-62",
          "school_id": "school-62",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-49"
      },
      {
          "id": "distance-63",
          "school_id": "school-63",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-49"
      },
      {
          "id": "distance-64",
          "school_id": "school-64",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-50"
      },
      {
          "id": "distance-65",
          "school_id": "school-65",
          "priority_1": "zonation-4",
          "priority_2": "address-5",
          "priority_3": "sub-address-51"
      },
      {
          "id": "distance-66",
          "school_id": "school-66",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-52"
      },
      {
          "id": "distance-67",
          "school_id": "school-67",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-53"
      },
      {
          "id": "distance-68",
          "school_id": "school-68",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-54"
      },
      {
          "id": "distance-69",
          "school_id": "school-69",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-16"
      },
      {
          "id": "distance-70",
          "school_id": "school-70",
          "priority_1": "zonation-4",
          "priority_2": "address-6",
          "priority_3": "sub-address-52"
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
        {
            "id": "zonation-5",
            "name": 'E',
            "address": [
                'address-2',
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