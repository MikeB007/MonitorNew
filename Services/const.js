var _periods= [
    {
        id:1,
        duration1:"",duration:"1d"
    },
    {
        id:2,
        duration1:"",duration:"5d"
    },
    {
        id:3,
        duration1:"",duration:"10d"
    },
    {
    id:4,
    duration1:"",duration:"20d"
    },
    {
    id:5,
    duration1:"",duration:"29d"
    },    
    {
        id:6,
        duration1:"",duration:"1m"
    },
    {
        id:7,
        duration1:"",duration:"3m"
    },
    {
        id:8,
        duration1:"",duration:"6m"
    },
    {
        id:9,
        duration1:"",duration:"9m"
    },
    {
        id:10,
        duration1:"",duration:"1y"
    },
    {
        id:11,
        duration1:"",duration:"2y"
    },
    {
        id:12,
        duration1:"",duration:"3y"
    },
    {
        id:13,
        duration1:"",duration:"5y"
    },
    {
        id:14,
        duration1:"",duration:"9y"
    },
    {
        id:15,
        duration1:"",duration:"my"
    }

];


var _sizes= [
    {
        id:1,
        size:"s"
    },
    {
        id:2,
        size:"m"
    },
    {
        id:3,
        size:"l"
    }

];

var _USBanks= [
    {
        id:1,
        Symbol:"TD"
    },
    {
        id:2,
        Symbol:"HSBC"
    },
    {
        id:3,
        Symbol:"BAC"
    },
    {
        id:4,
        Symbol:"USB"
    },
    {
        id:5,
        Symbol:"JPM"
    },
    {
        id:6,
        Symbol:"WFC"
    },

    {
        id:7,
        Symbol:"MS"
    },
    {
        id:8,
        Symbol:"HCBK"
    },
    {
        id:9,
        Symbol:"BK"
    },
    {
        id:10,
        Symbol:"PNC"
    },

    {
        id:11,
        Symbol:"COF"
    },
    {
        id:12,
        Symbol:"AAPL"
    },
    {
        id:13,
        Symbol:"F"
    },
    {
        id:14,
        Symbol:"TD"
    },
    {
        id:15,
        Symbol:"RY"
    },
    {
        id:16,
        Symbol:"CM"
    },

    {
        id:17,
        Symbol:"BNS"
    },
    {
        id:18,
        Symbol:"BMO"
    },
    {
        id:19,
        Symbol:"CM"
    },
    {
        id:20,
        Symbol:"TD.TO"
    },
    {
        id:21,
        Symbol:"RY.TO"
    },
    {
        id:22,
        Symbol:"CM.TO"
    },

    {
        id:23,
        Symbol:"BNS.TO"
    },
    {
        id:24,
        Symbol:"BMO.TO"
    },
    {
        id:25,
        Symbol:"CM.TO"
    }

];


_INDEXES = [
{
    id:"AU",
        i:"%5eAORD"
},
{
    id:"AU",
        i:"%5eAXJO"
},
{
    id:"AA",
        i:"%5eN225"
},
{
    id:"AA",
        i:"%5eHSI"
},
{
    id:"AA",
        i:"%5eSTI"
},
{
    id:"SA",
        i:"%5eBVSP"
},
{
    id:"SA",
        i:"%5eMXX"
},
{
    id:"SA",
        i:"%5eIPSA"
},
{
    id:"SA",
        i:"%5eMERV"
},
{
    id:"US",
        i:"%5eDJI"
},
{
    id:"US",
    i:"%5eDJT"
},
{
    id:"US",
    i:"%5eDJU"
},
{
    id:"US",
    i:"%5eDJA"
},
{
    id:"US",
    i:"%5eDWCF"
},
{
    id:"US",
    i:"%5eNDX"
},
{
    id:"US",
    i:"%5eBANK"
},
{
    id:"US",
    i:"%5eNYA"
},
{
    id:"US",
    i:"%5eNYK"
},
{
    id:"CA",
    i:"%5eGSPTSE"
},
{
    id:"CA",
    i:"%5eSPCDNX"
},
{
    id:"CA",
    i:"TX60.TS"
},
{
    id:"CA",
    i:"%5eNQCA"
},
{
    id:"EU",
    i:"%5eFTSE"
},
{
    id:"EU",
    i:"%5eGDAXI"
},
{
    id:"EU",
    i:"%5eFCHI"
},
{
    id:"EU",
    i:"%5eSTOXX50E"
},
{
    id: "EU",
    i: "%5en100"
}
];

var _RECROD_FILTERS= [
    {
        id:1,
        cnt:"1"
    },
    {
        id:2,
        cnt:"5"
    },
    {
        id:3,
        cnt:"10"
    },
    {
        id:4,
        cnt:"20"
    },
    {
        id:5,
        cnt:"30"
    },
    {
        id:6,
        cnt:"50"
    },
    {
        id:7,
        cnt:"100"
    },
    {
        id:8,
        cnt:"200"
    }
]

var _URLS= [
    {
        id:"BLANK",
        url:""
    },
    {
        id:"TMX",
        url:"http://web.tmxmoney.com/quote.php?qm_symbol=<>",
        urlMain:"http://www.tmxmoney.com/en/index.html"
    },
    {
        id:"L2",
        url:"http://162.68.208.10/arcadataserver/ArcaBookData.php?Symbol=TD",
        urlMain:""
    },
    {
        id:"YI",
        url:"http://finance.yahoo.com/stock-center",
        urlMain:""
    },
    {
        id:"USF",
        url:"http://money.cnn.com/quote/quote.html?symb=<>",
        urlMain:"http://money.cnn.com/data/premarket/"
    },
    {
        id:"FPost",
        url:"http://www.financialpost.com/markets/company/index.html?symbol=<>",
        urlMain:"http://www.financialpost.com/index.html"
    },
    {
        id:"ADVFN",
        url:"http://www.advfn.com",
        urlMain:""
    },
    {
        id:"YV",
        url:"http://ca.finance.yahoo.com/actives?e=to",
        urlMain:"http://ca.finance.yahoo.com/gainers?e=to"
    },
    {
        id:"YN",
        url:"http://finance.yahoo.com/quotes/[]/view/fg",
        urlMain:"https://ca.finance.yahoo.com/personal-finance/"
    },
    {
        id: "YG",
        url: "http://finance.yahoo.com/echarts?s=vrx.to,td.to,ry.to&t=1y}",
        urlMain:"http://finance.yahoo.com"
    },
    {
        id:"FULL",
        url:"http://www.fool.ca/?s=<>&submit=",
        urlMain: "http://www.fool.ca"
    },
    {
        id:"WALLSTREET",
        url:"http://quotes.wsj.com/CA/<>",
        urlMain: "http://www.wsj.com/"
    },
    {
        id:"WALL",
        url:"http://quotes.wsj.com/CA/XTSE/<>/research-ratings",
        urlMain: "http://www.wsj.com/"
    },
    {
        id:"STOCKHOUSE",
        url:"http://www.stockhouse.com/companies/bullboard/t.<>"
    },
    {
        id:"REUTERS",
        url:"http://www.reuters.com/finance/stocks/overview?symbol=<-->",
        urlMain: "http://www.reuters.com"
    },
    {
        id:"BNN",
        url:"http://www.bnn.ca/Stock.aspx?pi_symbol=<-->",
        urlMain: "http://www.bnn.ca"
    },

    {
        id:"Empty",
        url:"http://www.google.ca"
    }
    ];

var _LINKS= [
    {
        id:"247",
        url:"http://247wallst.com/investing/",
        desc:"247",
        default:"http://247wallst.com/investing/"
    },
    {
    id:"BIT BUCKET-https://bitbucket.org/richardpenman/webscraping/overview",
    url:"https://bitbucket.org/richardpenman/webscraping/overview",
    desc:"scraPing-http://docs.webscraping.com/introduction.html",
    default:"http://docs.webscraping.com/introduction.html"
},
    {
    id:"TMX",
    url:"http://www.tmxmoney.com/en/index.html",
    desc:"TSX",
    default:"http://www.tmxmoney.com/en/index.html"
},


    {
        id:"Cloud",
        url:"http://www.clivemaund.com/",
        desc:"clivemaund",
        default:"http://www.clivemaund.com/"
    }


   ]