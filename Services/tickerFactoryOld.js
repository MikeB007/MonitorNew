Monitor.factory('tickerFactoryOld', function() {
    tickers = [
            {
                "Symbol": "ACL",
                "Market": "V",
                "Name": "ACL International Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AAV",
                "Market": "TO",
                "Name": "Advantage Oil & Gas Ltd.",
                "USSymbol": "AAV",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "AEZ",
                "Market": "TO",
                "Name": "AEterna Zentaris Inc.",
                "USSymbol": "AEZS",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "AOI",
                "Market": "TO",
                "Name": "Africa Oil Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "AEM",
                "Market": "TO",
                "Name": "Agnico Eagle Mines Limited",
                "USSymbol": "AEM",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "AGU",
                "Market": "TO",
                "Name": "Agrium Inc.",
                "USSymbol": "AGU",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ALP",
                "Market": "V",
                "Name": "Alabama Graphite Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ASR",
                "Market": "TO",
                "Name": "Alacer Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "AGI",
                "Market": "TO",
                "Name": "Alamos Gold Inc.",
                "USSymbol": "AGI",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ADV",
                "Market": "TO",
                "Name": "Alderon Iron Ore Corp.",
                "USSymbol": "AXX",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "AXR",
                "Market": "TO",
                "Name": "Alexco Resource Corp.",
                "USSymbol": "AXU",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "AMM",
                "Market": "TO",
                "Name": "Almaden Minerals Ltd.",
                "USSymbol": "AAU",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ALT",
                "Market": "V",
                "Name": "Alturas Minerals Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "AHR",
                "Market": "V",
                "Name": "Amarc Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "AYA",
                "Market": "TO",
                "Name": "Amaya Inc.",
                "USSymbol": "AYA",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MLY",
                "Market": "V",
                "Name": "American CuMo Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "HOT.UN",
                "Market": "TO",
                "Name": "American Hotel Income Properties REIT LP",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AVC",
                "Market": "V",
                "Name": "American Vanadium Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ARG",
                "Market": "TO",
                "Name": "Amerigo Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "ARG",
                "Market": "TO",
                "Name": "Amerigo Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AAU",
                "Market": "V",
                "Name": "AndeanGold Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "APY",
                "Market": "TO",
                "Name": "Anglo Pacific Group PLC",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LSE"
            },
            {
                "Symbol": "AE",
                "Market": "V",
                "Name": "Anterra Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ATE",
                "Market": "V",
                "Name": "Antibe Therapeutics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AGD",
                "Market": "V",
                "Name": "Antioquia Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AEN",
                "Market": "V",
                "Name": "Antrim Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "APS",
                "Market": "TO",
                "Name": "Aptose Biosciences Inc.",
                "USSymbol": "APTO",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "AQM",
                "Market": "V",
                "Name": "AQM Copper Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "AQA",
                "Market": "TO",
                "Name": "Aquila Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AGQ",
                "Market": "V",
                "Name": "Arian Silver Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "A",
                "Market": "V",
                "Name": "Armor Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "ARW",
                "Market": "V",
                "Name": "Aroway Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AEI",
                "Market": "TO",
                "Name": "Arsenal Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AKG",
                "Market": "TO",
                "Name": "Asanko Gold Inc.",
                "USSymbol": "AKG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ARS",
                "Market": "V",
                "Name": "Asiamet Resources Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "ATG",
                "Market": "V",
                "Name": "Atlanta Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AGB",
                "Market": "V",
                "Name": "Atlantic Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "ATP",
                "Market": "TO",
                "Name": "Atlantic Power Corporation",
                "USSymbol": "AT",
                "Sector": "Clean Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ATL",
                "Market": "TO",
                "Name": "Atlatsa Resources Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ATL",
                "Market": "TO",
                "Name": "Atlatsa Resources Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "JSE"
            },
            {
                "Symbol": "AUN",
                "Market": "V",
                "Name": "Aurcana Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AUE",
                "Market": "TO",
                "Name": "Aureus Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "AUP",
                "Market": "TO",
                "Name": "Aurinia Pharmaceuticals Inc. J",
                "USSymbol": "AUPH",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "AUG",
                "Market": "V",
                "Name": "Auryn Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AVL",
                "Market": "TO",
                "Name": "Avalon Rare Metals Inc.",
                "USSymbol": "AVL",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ASM",
                "Market": "V",
                "Name": "Avino Silver & Gold Mines Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "BTO",
                "Market": "TO",
                "Name": "B2Gold Corp.",
                "USSymbol": "BTG",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BAJ",
                "Market": "V",
                "Name": "Baja Mining Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "BLD",
                "Market": "TO",
                "Name": "Ballard Power Systems Inc.",
                "USSymbol": "BLDP",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "BAR",
                "Market": "TO",
                "Name": "Balmoral Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BMO",
                "Market": "TO",
                "Name": "Bank of Montreal",
                "USSymbol": "BMO",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BNS",
                "Market": "TO",
                "Name": "Bank of Nova Scotia (The)",
                "USSymbol": "BNS",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BNK",
                "Market": "TO",
                "Name": "Bankers Petroleum Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "BAN",
                "Market": "TO",
                "Name": "Bannerman Resources Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "BAA",
                "Market": "TO",
                "Name": "Banro Corporation",
                "USSymbol": "BAA",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ABX",
                "Market": "TO",
                "Name": "Barrick Gold Corporation",
                "USSymbol": "ABX",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BTE",
                "Market": "TO",
                "Name": "Baytex Energy Corp.",
                "USSymbol": "BTE",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BCE",
                "Market": "TO",
                "Name": "BCE Inc.",
                "USSymbol": "BCE",
                "Sector": "Comm & Media",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BXE",
                "Market": "TO",
                "Name": "Bellatrix Exploration Ltd.",
                "USSymbol": "BXE",
                "Sector": "Oil & Gas",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "BTI",
                "Market": "V",
                "Name": "biOasis Technologies Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BB",
                "Market": "TO",
                "Name": "BlackBerry Limited",
                "USSymbol": "BBRY",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "PXX",
                "Market": "TO",
                "Name": "BlackPearl Resources Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "BBD.B",
                "Market": "TO",
                "Name": "Bombardier Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BXO",
                "Market": "TO",
                "Name": "Boulder Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BHT",
                "Market": "V",
                "Name": "Braveheart Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BRI",
                "Market": "V",
                "Name": "Brazil Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BAM.A",
                "Market": "TO",
                "Name": "Brookfield Asset Management Inc.",
                "USSymbol": "BAM",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BOX.UN",
                "Market": "TO",
                "Name": "Brookfield Canada Office Properties",
                "USSymbol": "BOXC",
                "Sector": "Real Estate",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BIP.UN",
                "Market": "TO",
                "Name": "Brookfield Infrastructure Partners L.P.",
                "USSymbol": "BIP",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BPO.PR.A",
                "Market": "TO",
                "Name": "Brookfield Office Properties Inc.",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BPY.UN",
                "Market": "TO",
                "Name": "Brookfield Property Partners L.P.",
                "USSymbol": "BPY",
                "Sector": "Real Estate",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BEP.UN",
                "Market": "TO",
                "Name": "Brookfield Renewable Energy Partners L.P.",
                "USSymbol": "BEP",
                "Sector": "Clean Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BUF",
                "Market": "TO",
                "Name": "Buffalo Coal Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "JSE"
            },
            {
                "Symbol": "BU",
                "Market": "TO",
                "Name": "Burcon NutraScience Corporation",
                "USSymbol": "BUR",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "CAE",
                "Market": "TO",
                "Name": "CAE Inc.",
                "USSymbol": "CAE",
                "Sector": "Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CGM",
                "Market": "V",
                "Name": "California Gold Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CNX",
                "Market": "V",
                "Name": "Callinex Mines Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CCO",
                "Market": "TO",
                "Name": "Cameco Corporation",
                "USSymbol": "CCJ",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CF",
                "Market": "TO",
                "Name": "Canaccord Genuity Group Inc.",
                "USSymbol": "",
                "Sector": "Financial Services",
                "OTC": "LSE"
            },
            {
                "Symbol": "CNE",
                "Market": "TO",
                "Name": "Canacol Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "BVC"
            },
            {
                "Symbol": "CNE",
                "Market": "TO",
                "Name": "Canacol Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CEU",
                "Market": "TO",
                "Name": "Canadian Energy Services & Technology Corp.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CGI",
                "Market": "TO",
                "Name": "Canadian General Investments Limited",
                "USSymbol": "",
                "Sector": "Financial Services",
                "OTC": "LSE"
            },
            {
                "Symbol": "CM",
                "Market": "TO",
                "Name": "Canadian Imperial Bank Of Commerce",
                "USSymbol": "CM",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CNR",
                "Market": "TO",
                "Name": "Canadian National Railway Company",
                "USSymbol": "CNI",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CNQ",
                "Market": "TO",
                "Name": "Canadian Natural Resources Limited",
                "USSymbol": "CNQ",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "COS",
                "Market": "TO",
                "Name": "Canadian Oil Sands Limited",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "XOP",
                "Market": "V",
                "Name": "Canadian Overseas Petroleum Limited",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "LSE"
            },
            {
                "Symbol": "CP",
                "Market": "TO",
                "Name": "Canadian Pacific Railway Limited",
                "USSymbol": "CP",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CVV",
                "Market": "V",
                "Name": "Canalaska Uranium Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "CSQ",
                "Market": "V",
                "Name": "Canamex Resources Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DNT",
                "Market": "TO",
                "Name": "Candente Copper Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "CEV",
                "Market": "V",
                "Name": "Cap-Ex Iron Ore Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CDU",
                "Market": "TO",
                "Name": "Cardero Resource Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "COM",
                "Market": "TO",
                "Name": "Cardiome Pharma Corp.",
                "USSymbol": "CRME",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "CGJ",
                "Market": "TO",
                "Name": "Carlisle Goldfields Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CCY",
                "Market": "V",
                "Name": "Catalyst Copper Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CZY",
                "Market": "V",
                "Name": "Caza Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CAZ",
                "Market": "TO",
                "Name": "Caza Oil & Gas Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "CLS",
                "Market": "TO",
                "Name": "Celestica Inc.",
                "USSymbol": "CLS",
                "Sector": "Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CVE",
                "Market": "TO",
                "Name": "Cenovus Energy Inc.",
                "USSymbol": "CVE",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CEE",
                "Market": "TO",
                "Name": "Centamin plc",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LSE"
            },
            {
                "Symbol": "CEF.A",
                "Market": "TO",
                "Name": "Central Fund of Canada Limited",
                "USSymbol": "CEF",
                "Sector": "Closed-End Funds",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GTU.UN",
                "Market": "TO",
                "Name": "Central GoldTrust",
                "USSymbol": "GTU",
                "Sector": "Closed-End Funds",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GIB.A",
                "Market": "TO",
                "Name": "CGI Group Inc.",
                "USSymbol": "GIB",
                "Sector": "Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CXN",
                "Market": "TO",
                "Name": "Chalice Gold Mines Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "CIA",
                "Market": "TO",
                "Name": "Champion Iron Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "CKG",
                "Market": "V",
                "Name": "Chesapeake Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CMX",
                "Market": "V",
                "Name": "Chilean Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CHN",
                "Market": "V",
                "Name": "China Education Resources Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CGG",
                "Market": "TO",
                "Name": "China Gold International Resources Corp. Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "HKEx"
            },
            {
                "Symbol": "MBA",
                "Market": "TO",
                "Name": "CIBT Education Group Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MBA",
                "Market": "TO",
                "Name": "CIBT Education Group Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "CPH",
                "Market": "TO",
                "Name": "Cipher Pharmaceuticals",
                "USSymbol": "CPHR",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "CRJ",
                "Market": "TO",
                "Name": "Claude Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "CNU",
                "Market": "TO",
                "Name": "CNOOC Limited",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CNU",
                "Market": "TO",
                "Name": "CNOOC Limited",
                "USSymbol": "CEO",
                "Sector": "Oil & Gas",
                "OTC": "HKEx"
            },
            {
                "Symbol": "COB.U",
                "Market": "V",
                "Name": "CohBar Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CIG",
                "Market": "TO",
                "Name": "Colliers International Group Inc.",
                "USSymbol": "CIGI",
                "Sector": "Real Estate",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "GTP",
                "Market": "V",
                "Name": "Colt Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CGT",
                "Market": "V",
                "Name": "Columbus Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CCE",
                "Market": "V",
                "Name": "Commerce Resources Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CXR",
                "Market": "TO",
                "Name": "Concordia Healthcare Corp.",
                "USSymbol": "CXRX",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CFM",
                "Market": "V",
                "Name": "Confederation Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CNL",
                "Market": "TO",
                "Name": "Continental Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CRD",
                "Market": "V",
                "Name": "Coronado Resources Ltd.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CRF",
                "Market": "V",
                "Name": "Coronet Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CBX",
                "Market": "V",
                "Name": "Cortex Business Solutions Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "KOR",
                "Market": "TO",
                "Name": "Corvus Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BCB",
                "Market": "TO",
                "Name": "Cott Corporation",
                "USSymbol": "COT",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CCV",
                "Market": "TO",
                "Name": "CounterPath Corporation",
                "USSymbol": "CPAH",
                "Sector": "Technology",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "CPG",
                "Market": "TO",
                "Name": "Crescent Point Energy Corp.",
                "USSymbol": "CPG",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "CRH",
                "Market": "TO",
                "Name": "CRH Medical Corporation",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CRE",
                "Market": "V",
                "Name": "Critical Elements Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CPM",
                "Market": "V",
                "Name": "Crystal Peak Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "CTH",
                "Market": "TO",
                "Name": "Cynapsus Therapeutics Inc.",
                "USSymbol": "CYNA",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DNA",
                "Market": "TO",
                "Name": "Dalradian Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DEJ",
                "Market": "TO",
                "Name": "Dejour Energy Inc.",
                "USSymbol": "DEJ",
                "Sector": "Oil & Gas",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "DVO.U",
                "Market": "V",
                "Name": "Delavaco Residential Properties Corp.",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DML",
                "Market": "TO",
                "Name": "Denison Mines Corp.",
                "USSymbol": "DNN",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "DSG",
                "Market": "TO",
                "Name": "Descartes Systems Group Inc. (The)",
                "USSymbol": "DSGX",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "DAU",
                "Market": "V",
                "Name": "Desert Gold Ventures Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DSY",
                "Market": "V",
                "Name": "Destiny Media Technologies Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DHX.A",
                "Market": "TO",
                "Name": "DHX Media Ltd.",
                "USSymbol": "DHXM",
                "Sector": "Comm & Media",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "CUR",
                "Market": "TO",
                "Name": "DiagnoCure Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DMI",
                "Market": "V",
                "Name": "Diamcor Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DVN",
                "Market": "V",
                "Name": "Discovery Ventures Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DDC",
                "Market": "TO",
                "Name": "Dominion Diamond Corporation",
                "USSymbol": "DDC",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "UFS",
                "Market": "TO",
                "Name": "Domtar Corporation",
                "USSymbol": "UFS",
                "Sector": "Forest Products & Paper",
                "OTC": "NYSE"
            },
            {
                "Symbol": "DXA",
                "Market": "V",
                "Name": "Doxa Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DWI",
                "Market": "TO",
                "Name": "DragonWave Inc.",
                "USSymbol": "DRWI",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "DPH",
                "Market": "V",
                "Name": "Duncan Park Holdings Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "DRV",
                "Market": "V",
                "Name": "Duran Ventures Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "DSF",
                "Market": "V",
                "Name": "DuSolo Fertilizers Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCPK"
            },
            {
                "Symbol": "DMM",
                "Market": "TO",
                "Name": "Dynasty Metals & Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ELR",
                "Market": "TO",
                "Name": "Eastern Platinum Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "JSE"
            },
            {
                "Symbol": "ELR",
                "Market": "TO",
                "Name": "Eastern Platinum Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "ECP",
                "Market": "TO",
                "Name": "Ecopetrol S.A.",
                "USSymbol": "EC",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ECP",
                "Market": "TO",
                "Name": "Ecopetrol S.A.",
                "USSymbol": "EC",
                "Sector": "Oil & Gas",
                "OTC": "BVC"
            },
            {
                "Symbol": "EDW",
                "Market": "V",
                "Name": "Edgewater Exploration Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ELN",
                "Market": "V",
                "Name": "El Nino Ventures Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ELS",
                "Market": "V",
                "Name": "El Tigre Silver Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ELD",
                "Market": "TO",
                "Name": "Eldorado Gold Corporation",
                "USSymbol": "EGO",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ELI",
                "Market": "V",
                "Name": "Elissa Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EMD",
                "Market": "TO",
                "Name": "EMED Mining Public Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "ENB",
                "Market": "TO",
                "Name": "Enbridge Inc.",
                "USSymbol": "ENB",
                "Sector": "Utilities & Pipelines",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ECA",
                "Market": "TO",
                "Name": "Encana Corporation",
                "USSymbol": "ECA",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "EPO",
                "Market": "V",
                "Name": "Encanto Potash Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EDV",
                "Market": "TO",
                "Name": "Endeavour Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EDV",
                "Market": "TO",
                "Name": "Endeavour Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "EDR",
                "Market": "TO",
                "Name": "Endeavour Silver Corp.",
                "USSymbol": "EXK",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "ENL",
                "Market": "TO",
                "Name": "Endo International plc",
                "USSymbol": "ENDP",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "EGZ",
                "Market": "TO",
                "Name": "Energizer Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EFR",
                "Market": "TO",
                "Name": "Energy Fuels Inc.",
                "USSymbol": "UUUU",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ERF",
                "Market": "TO",
                "Name": "Enerplus Corporation",
                "USSymbol": "ERF",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "EOR",
                "Market": "V",
                "Name": "Enhanced Oil Resources Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ETG",
                "Market": "TO",
                "Name": "Entree Gold Inc.",
                "USSymbol": "EGI",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "EQU.DB.B",
                "Market": "TO",
                "Name": "Equal Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "EPI",
                "Market": "TO",
                "Name": "Essa Pharma Inc.",
                "USSymbol": "EPIX",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "ECC",
                "Market": "V",
                "Name": "Ethos Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ETX",
                "Market": "TO",
                "Name": "Etrion Corporation",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "EMX",
                "Market": "V",
                "Name": "Eurasian Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "EOX",
                "Market": "V",
                "Name": "EurOmax Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EUU",
                "Market": "V",
                "Name": "European Uranium Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "EVR",
                "Market": "V",
                "Name": "Everton Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MIN",
                "Market": "V",
                "Name": "Excelsior Mining Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "XRC",
                "Market": "TO",
                "Name": "Exeter Resource Corporation",
                "USSymbol": "XRA",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "EXF",
                "Market": "TO",
                "Name": "EXFO Inc.",
                "USSymbol": "EXFO",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "FO",
                "Market": "V",
                "Name": "Falcon Oil & Gas Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "FO",
                "Market": "V",
                "Name": "Falcon Oil & Gas Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "Irish Stock Exchange"
            },
            {
                "Symbol": "FR",
                "Market": "TO",
                "Name": "First Majestic Silver Corp.",
                "USSymbol": "AG",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "FM",
                "Market": "TO",
                "Name": "First Quantum Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LSE"
            },
            {
                "Symbol": "FSV",
                "Market": "TO",
                "Name": "FirstService Corporation",
                "USSymbol": "FSV",
                "Sector": "Real Estate",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "FLY",
                "Market": "V",
                "Name": "FLYHT Aerospace Solutions Ltd.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "FMS",
                "Market": "V",
                "Name": "Focus Graphite Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "FCO",
                "Market": "TO",
                "Name": "Formation Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "FVI",
                "Market": "TO",
                "Name": "Fortuna Silver Mines Inc.",
                "USSymbol": "FSM",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "FVI",
                "Market": "TO",
                "Name": "Fortuna Silver Mines Inc.",
                "USSymbol": "FSM",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "FT",
                "Market": "TO",
                "Name": "Fortune Minerals Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "FNV",
                "Market": "TO",
                "Name": "Franco-Nevada Corporation",
                "USSymbol": "FNV",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "GAL",
                "Market": "V",
                "Name": "Galantas Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "GZT",
                "Market": "TO",
                "Name": "Gazit-Globe Ltd.",
                "USSymbol": "GZT",
                "Sector": "Real Estate",
                "OTC": "NYSE"
            },
            {
                "Symbol": "GZT",
                "Market": "TO",
                "Name": "Gazit-Globe Ltd.",
                "USSymbol": "GZT",
                "Sector": "Real Estate",
                "OTC": "TASE"
            },
            {
                "Symbol": "GMO",
                "Market": "TO",
                "Name": "General Moly Inc.",
                "USSymbol": "GMO",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GMM.U",
                "Market": "TO",
                "Name": "General Motors Company",
                "USSymbol": "GM",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "GIX",
                "Market": "TO",
                "Name": "Geologix Explorations Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GIL",
                "Market": "TO",
                "Name": "Gildan Activewear Inc.",
                "USSymbol": "GIL",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "WDG",
                "Market": "V",
                "Name": "Giyani Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "JSE"
            },
            {
                "Symbol": "BOB",
                "Market": "V",
                "Name": "Global Hunter Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GMX",
                "Market": "TO",
                "Name": "Globex Mining Enterprises Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GSV",
                "Market": "V",
                "Name": "Gold Standard Ventures Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "G",
                "Market": "TO",
                "Name": "Goldcorp Inc.",
                "USSymbol": "GG",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "GBN",
                "Market": "V",
                "Name": "Golden Band Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "AUM",
                "Market": "TO",
                "Name": "Golden Minerals Company",
                "USSymbol": "AUMN",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GQM",
                "Market": "TO",
                "Name": "Golden Queen Mining Co. Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GSC",
                "Market": "TO",
                "Name": "Golden Star Resources Ltd.",
                "USSymbol": "GSS",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GOD",
                "Market": "V",
                "Name": "Goldrush Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GTE",
                "Market": "TO",
                "Name": "Gran Tierra Energy Inc.",
                "USSymbol": "GTE",
                "Sector": "Oil & Gas",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GXO",
                "Market": "TO",
                "Name": "Granite Oil Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GRT.UN",
                "Market": "TO",
                "Name": "Granite Real Estate Investment Trust",
                "USSymbol": "GRP.U",
                "Sector": "Real Estate",
                "OTC": "NYSE"
            },
            {
                "Symbol": "GPH",
                "Market": "V",
                "Name": "Graphite One Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GPR",
                "Market": "TO",
                "Name": "Great Panther Silver Limited",
                "USSymbol": "GPL",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "GZD",
                "Market": "V",
                "Name": "Grizzly Discoveries Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GWR",
                "Market": "TO",
                "Name": "GWR Global Water Resources Corp.",
                "USSymbol": "",
                "Sector": "Utilities & Pipelines",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "HEO",
                "Market": "V",
                "Name": "H2O Innovation Inc.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "HEO",
                "Market": "V",
                "Name": "H2O Innovation Inc.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "NYSE Alternext"
            },
            {
                "Symbol": "HER",
                "Market": "TO",
                "Name": "Heron Resources Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "HZM",
                "Market": "TO",
                "Name": "Horizonte Minerals Plc",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "HBM",
                "Market": "TO",
                "Name": "HudBay Minerals Inc.",
                "USSymbol": "HBM",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "HBM",
                "Market": "TO",
                "Name": "HudBay Minerals Inc.",
                "USSymbol": "HBM",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "HUD",
                "Market": "V",
                "Name": "Hudson Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "HYG",
                "Market": "TO",
                "Name": "Hydrogenics Corporation",
                "USSymbol": "HYGS",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "IMA",
                "Market": "V",
                "Name": "I-Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IMG",
                "Market": "TO",
                "Name": "IAMGold Corporation",
                "USSymbol": "IAG",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "IB",
                "Market": "V",
                "Name": "IBC Advanced Alloys Corp.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ICP",
                "Market": "TO",
                "Name": "IC Potash Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ICO",
                "Market": "V",
                "Name": "iCo Therapeutics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IMV",
                "Market": "TO",
                "Name": "Immunovaccine Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IMO",
                "Market": "TO",
                "Name": "Imperial Oil Limited",
                "USSymbol": "IMO",
                "Sector": "Oil & Gas",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "ICG",
                "Market": "V",
                "Name": "Integra Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IGX",
                "Market": "V",
                "Name": "IntelGenx Technologies Corp.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "I",
                "Market": "TO",
                "Name": "IntelliPharmaCeutics International Inc.",
                "USSymbol": "IPCI",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "ITH",
                "Market": "TO",
                "Name": "International Tower Hill Mines Ltd.",
                "USSymbol": "THM",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "INT",
                "Market": "V",
                "Name": "Intertainment Media Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IGD",
                "Market": "V",
                "Name": "Intigold Mines Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IRC",
                "Market": "V",
                "Name": "Ironside Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IGT",
                "Market": "TO",
                "Name": "iShares Gold Trust",
                "USSymbol": "IAU",
                "Sector": "ETP",
                "OTC": "NYSE Arca"
            },
            {
                "Symbol": "ISD",
                "Market": "V",
                "Name": "iSign Media Solutions Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "IAE",
                "Market": "TO",
                "Name": "Ithaca Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "JCO",
                "Market": "V",
                "Name": "Jericho Oil Corporation",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "JE",
                "Market": "TO",
                "Name": "Just Energy Group Inc.",
                "USSymbol": "JE",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "KEK",
                "Market": "V",
                "Name": "Keek Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "KLS",
                "Market": "TO",
                "Name": "Kelso Technologies Inc.",
                "USSymbol": "KIQ",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "KFS",
                "Market": "TO",
                "Name": "Kingsway Financial Services Inc.",
                "USSymbol": "KFS",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "K",
                "Market": "TO",
                "Name": "Kinross Gold Corporation",
                "USSymbol": "KGC",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "KGI",
                "Market": "TO",
                "Name": "Kirkland Lake Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "KDX",
                "Market": "TO",
                "Name": "Klondex Mines Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "KXM",
                "Market": "V",
                "Name": "Kobex Capital Corp.",
                "USSymbol": "",
                "Sector": "Financial Services",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "LSG",
                "Market": "TO",
                "Name": "Lake Shore Gold Corp.",
                "USSymbol": "LSG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "LAM",
                "Market": "TO",
                "Name": "Laramide Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "LAT",
                "Market": "V",
                "Name": "Latin American Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LME",
                "Market": "V",
                "Name": "Laurion Mineral Exploration Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LMD",
                "Market": "V",
                "Name": "LED Medical Diagnostics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LVN",
                "Market": "TO",
                "Name": "Levon Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LEX",
                "Market": "TO",
                "Name": "Lexam VG Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LIO",
                "Market": "V",
                "Name": "Lion One Metals Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LMR",
                "Market": "V",
                "Name": "Lomiko Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LN",
                "Market": "TO",
                "Name": "Loncor Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "LUC",
                "Market": "TO",
                "Name": "Lucara Diamond Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "LGC",
                "Market": "TO",
                "Name": "Luna Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "LGC",
                "Market": "TO",
                "Name": "Luna Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LUG",
                "Market": "TO",
                "Name": "Lundin Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "LUN",
                "Market": "TO",
                "Name": "Lundin Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "MMS",
                "Market": "V",
                "Name": "Macarthur Minerals Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MCZ",
                "Market": "TO",
                "Name": "Mad Catz Interactive",
                "USSymbol": "Inc.",
                "Sector": "MCZ",
                "OTC": "Technology "
            },
            {
                "Symbol": "MAG",
                "Market": "TO",
                "Name": "MAG Silver Corp.",
                "USSymbol": "MVG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "MNM",
                "Market": "V",
                "Name": "Magellan Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MG",
                "Market": "TO",
                "Name": "Magna International Inc.",
                "USSymbol": "MGA",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "MJS",
                "Market": "V",
                "Name": "Majestic Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MFC",
                "Market": "TO",
                "Name": "Manulife Financial Corporation",
                "USSymbol": "MFC",
                "Sector": "Financial Services",
                "OTC": "HKEx"
            },
            {
                "Symbol": "MFC",
                "Market": "TO",
                "Name": "Manulife Financial Corporation",
                "USSymbol": "MFC",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "MRN",
                "Market": "TO",
                "Name": "Marengo Mining Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "MLN",
                "Market": "V",
                "Name": "Marlin Gold Mining Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MQL",
                "Market": "V",
                "Name": "Marquee Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "LLG",
                "Market": "V",
                "Name": "Mason Graphite Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MAT",
                "Market": "V",
                "Name": "Matamec Explorations Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MAO",
                "Market": "V",
                "Name": "Maudore Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MBC",
                "Market": "TO",
                "Name": "MBAC Fertilizer Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MCB",
                "Market": "TO",
                "Name": "McCoy Global Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MUX",
                "Market": "TO",
                "Name": "McEwen Mining Inc.",
                "USSymbol": "MUX",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "MCW",
                "Market": "V",
                "Name": "MCW Energy Group Limited",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MDZ.A",
                "Market": "TO",
                "Name": "MDC Partners Inc.",
                "USSymbol": "MDCA",
                "Sector": "Comm & Media",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MDL",
                "Market": "V",
                "Name": "Medallion Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MFS",
                "Market": "V",
                "Name": "Medifocus Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MRI.U",
                "Market": "TO",
                "Name": "Mercer International Inc.",
                "USSymbol": "MERC",
                "Sector": "Forest Products & Paper",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MSL",
                "Market": "TO",
                "Name": "Merus Labs International Inc.",
                "USSymbol": "MSLI",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "MX",
                "Market": "TO",
                "Name": "Methanex Corporation",
                "USSymbol": "MEOH",
                "Sector": "Diversified Industries",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MAX",
                "Market": "TO",
                "Name": "Midas Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MRO",
                "Market": "V",
                "Name": "Millrock Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MMM",
                "Market": "TO",
                "Name": "Minco Gold Corporation",
                "USSymbol": "MGH",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "MSV",
                "Market": "TO",
                "Name": "Minco Silver Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MIO",
                "Market": "V",
                "Name": "Mindoro Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "MAK",
                "Market": "TO",
                "Name": "Minemakers Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "IRL",
                "Market": "TO",
                "Name": "Minera IRL Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "IRL",
                "Market": "TO",
                "Name": "Minera IRL Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "MMV",
                "Market": "V",
                "Name": "Mineral Mountain Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "MGT",
                "Market": "TO",
                "Name": "Mines Management Inc.",
                "USSymbol": "MGN",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "MNW",
                "Market": "TO",
                "Name": "Mitel Networks Corporation",
                "USSymbol": "MITL",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MM",
                "Market": "TO",
                "Name": "Mood Media Corporation",
                "USSymbol": "",
                "Sector": "Comm & Media",
                "OTC": "AIM"
            },
            {
                "Symbol": "MPV",
                "Market": "TO",
                "Name": "Mountain Province Diamonds Inc.",
                "USSymbol": "MDM",
                "Sector": "Mining",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "MVW",
                "Market": "V",
                "Name": "Mountainview Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NRE",
                "Market": "TO",
                "Name": "Namibia Rare Earths Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NTS",
                "Market": "V",
                "Name": "NanoTech Security Corp.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NSP",
                "Market": "V",
                "Name": "Naturally Splendid Enterprises Ltd.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "NUS",
                "Market": "TO",
                "Name": "Nautilus Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NMX",
                "Market": "V",
                "Name": "Nemaska Lithium Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NVC",
                "Market": "TO",
                "Name": "Neovasc Inc.",
                "USSymbol": "NVCN",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "NTB",
                "Market": "TO",
                "Name": "Neptune Technologies & Bioressources Inc.",
                "USSymbol": "NEPT",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "NSU",
                "Market": "TO",
                "Name": "Nevsun Resources Ltd.",
                "USSymbol": "NSU",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NGD",
                "Market": "TO",
                "Name": "New Gold Inc.",
                "USSymbol": "NGD",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NML",
                "Market": "TO",
                "Name": "New Millennium Iron Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NZ",
                "Market": "V",
                "Name": "New Zealand Energy Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NCA",
                "Market": "V",
                "Name": "NewCastle Gold Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NMI",
                "Market": "TO",
                "Name": "Newmarket Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NXE",
                "Market": "V",
                "Name": "NexGen Energy Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NGQ",
                "Market": "TO",
                "Name": "NGEx Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "NB",
                "Market": "TO",
                "Name": "NioCorp Developments Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NOX",
                "Market": "V",
                "Name": "Niogold Mining Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NHC",
                "Market": "TO",
                "Name": "Nobilis Health Corp.",
                "USSymbol": "HLTH",
                "Sector": "Life Sciences",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NII",
                "Market": "TO",
                "Name": "Norsat International Inc.",
                "USSymbol": "NSAT",
                "Sector": "Diversified Industries",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NOA",
                "Market": "TO",
                "Name": "North American Energy Partners Inc.",
                "USSymbol": "NOA",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PDL",
                "Market": "TO",
                "Name": "North American Palladium Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NPD",
                "Market": "V",
                "Name": "North American Potash Developments Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NDM",
                "Market": "TO",
                "Name": "Northern Dynasty Minerals Ltd.",
                "USSymbol": "NAK",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NGC",
                "Market": "V",
                "Name": "Northern Graphite Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NFE",
                "Market": "V",
                "Name": "Northern Iron Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NEE",
                "Market": "V",
                "Name": "Northern Vertex Mining Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "NCQ",
                "Market": "TO",
                "Name": "NovaCopper Inc.",
                "USSymbol": "NCQ",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NDQ",
                "Market": "TO",
                "Name": "Novadaq Technologies Inc.",
                "USSymbol": "NVDQ",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "NG",
                "Market": "TO",
                "Name": "Novagold Resources Inc.",
                "USSymbol": "NG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "NUG",
                "Market": "V",
                "Name": "Nulegacy Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "OGC",
                "Market": "TO",
                "Name": "OceanaGold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "FEO",
                "Market": "V",
                "Name": "Oceanic Iron Ore Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ONC",
                "Market": "TO",
                "Name": "Oncolytics Biotech Inc.",
                "USSymbol": "ONCY",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "OTC",
                "Market": "TO",
                "Name": "Open Text Corporation",
                "USSymbol": "OTEX",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "OPS",
                "Market": "V",
                "Name": "OPSENS Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ORT",
                "Market": "TO",
                "Name": "Orbite Technologies Inc.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ORL",
                "Market": "TO",
                "Name": "Orocobre Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "OMI",
                "Market": "TO",
                "Name": "Orosur Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "OSU",
                "Market": "TO",
                "Name": "Orsu Metals Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "OOO",
                "Market": "V",
                "Name": "Otis Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "BKM",
                "Market": "V",
                "Name": "Pacific Booker Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "PRE",
                "Market": "TO",
                "Name": "Pacific Exploration & Production Corporation",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "BOVESPA"
            },
            {
                "Symbol": "PRE",
                "Market": "TO",
                "Name": "Pacific Exploration & Production Corporation",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "BVC"
            },
            {
                "Symbol": "PP",
                "Market": "V",
                "Name": "Pacific Potash Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PDN",
                "Market": "TO",
                "Name": "Paladin Energy Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "PAA",
                "Market": "TO",
                "Name": "Pan American Silver Corp.",
                "USSymbol": "PAAS",
                "Sector": "Mining",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "PML",
                "Market": "V",
                "Name": "Panoro Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "PKT",
                "Market": "V",
                "Name": "Parkit Enterprise Inc.",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PAR.UN",
                "Market": "TO",
                "Name": "Partners Real Estate Investment Trust",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PPI",
                "Market": "V",
                "Name": "Passport Potash Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PEG",
                "Market": "TO",
                "Name": "Pattern Energy Group Inc.",
                "USSymbol": "PEGI",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "PKL",
                "Market": "V",
                "Name": "PC Gold Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Frankfurt"
            },
            {
                "Symbol": "GEM",
                "Market": "V",
                "Name": "Pele Mountain Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PPL",
                "Market": "TO",
                "Name": "Pembina Pipeline Corporation",
                "USSymbol": "PBA",
                "Sector": "Utilities & Pipelines",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PGF",
                "Market": "TO",
                "Name": "Pengrowth Energy Corporation",
                "USSymbol": "PGH",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PWT",
                "Market": "TO",
                "Name": "Penn West Petroleum Ltd.",
                "USSymbol": "PWE",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PSG",
                "Market": "TO",
                "Name": "Performance Sports Group Ltd.",
                "USSymbol": "PSG",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PMT",
                "Market": "TO",
                "Name": "Perpetual Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PRU",
                "Market": "TO",
                "Name": "Perseus Mining Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "PPX",
                "Market": "V",
                "Name": "Peruvian Precious Metals Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "PRJ",
                "Market": "V",
                "Name": "Petro Rio S.A.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "BOVESPA"
            },
            {
                "Symbol": "PSH",
                "Market": "V",
                "Name": "PetroShale Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PTM",
                "Market": "TO",
                "Name": "Platinum Group Metals Ltd.",
                "USSymbol": "PLG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "PTK",
                "Market": "V",
                "Name": "POET Technologies Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PTS",
                "Market": "TO",
                "Name": "Points International Ltd.",
                "USSymbol": "PCOM",
                "Sector": "Technology",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "POM",
                "Market": "TO",
                "Name": "Polymet Mining Corp.",
                "USSymbol": "PLM",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "POT",
                "Market": "TO",
                "Name": "Potash Corporation of Saskatchewan Inc.",
                "USSymbol": "POT",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PRK",
                "Market": "TO",
                "Name": "Potash Ridge Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PD",
                "Market": "TO",
                "Name": "Precision Drilling Corporation",
                "USSymbol": "PDS",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PVG",
                "Market": "TO",
                "Name": "Pretium Resources Inc.",
                "USSymbol": "PVG",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "P",
                "Market": "TO",
                "Name": "Primero Mining Corp.",
                "USSymbol": "PPP",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "BIN",
                "Market": "TO",
                "Name": "Progressive Waste Solutions Ltd.",
                "USSymbol": "BIN",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "PLI",
                "Market": "TO",
                "Name": "ProMetic Life Sciences Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PCY",
                "Market": "TO",
                "Name": "Prophecy Development Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PSD",
                "Market": "TO",
                "Name": "Pulse Seismic Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RUF.UN",
                "Market": "V",
                "Name": "Pure Multi-Family REIT LP",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "QLT",
                "Market": "TO",
                "Name": "QLT Inc.",
                "USSymbol": "QLTI",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "QTA",
                "Market": "V",
                "Name": "Quaterra Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "QRM",
                "Market": "TO",
                "Name": "Quest Rare Minerals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "QEC",
                "Market": "TO",
                "Name": "Questerre Energy Corporation",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "Oslo Bors"
            },
            {
                "Symbol": "RAB",
                "Market": "V",
                "Name": "Rambler Metals and Mining plc",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "RES",
                "Market": "TO",
                "Name": "Rare Element Resources Ltd.",
                "USSymbol": "REE",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "RDX",
                "Market": "V",
                "Name": "RDX Technologies Corporation",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RD",
                "Market": "V",
                "Name": "Red Eagle Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ROC",
                "Market": "V",
                "Name": "Red Oak Mining Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RDK",
                "Market": "TO",
                "Name": "Redhawk Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RFP",
                "Market": "TO",
                "Name": "Resolute Forest Products Inc.",
                "USSymbol": "RFP",
                "Sector": "Forest Products & Paper",
                "OTC": "NYSE"
            },
            {
                "Symbol": "QSR",
                "Market": "TO",
                "Name": "Restaurant Brands International Inc.",
                "USSymbol": "QSR",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "RIC",
                "Market": "TO",
                "Name": "Richmont Mines Inc.",
                "USSymbol": "RIC",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "RBA",
                "Market": "TO",
                "Name": "Ritchie Bros. Auctioneers Incorporated",
                "USSymbol": "RBA",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "RDI",
                "Market": "TO",
                "Name": "Rockwell Diamonds Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "JSE"
            },
            {
                "Symbol": "RME",
                "Market": "TO",
                "Name": "Rocky Mountain Dealerships Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RM",
                "Market": "V",
                "Name": "Rodinia Lithium Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "RCI.B",
                "Market": "TO",
                "Name": "Rogers Communications Inc.",
                "USSymbol": "RCI",
                "Sector": "Comm & Media",
                "OTC": "NYSE"
            },
            {
                "Symbol": "RY",
                "Market": "TO",
                "Name": "Royal Bank of Canada",
                "USSymbol": "RY",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "RGL",
                "Market": "TO",
                "Name": "Royal Gold Inc.",
                "USSymbol": "RGLD",
                "Sector": "Mining",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "RTG",
                "Market": "TO",
                "Name": "RTG Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "RMX",
                "Market": "TO",
                "Name": "Rubicon Minerals Corporation",
                "USSymbol": "RBY",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "RPM",
                "Market": "V",
                "Name": "Rye Patch Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SSL",
                "Market": "TO",
                "Name": "Sandstorm Gold Ltd.",
                "USSymbol": "SAND",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "SCZ",
                "Market": "V",
                "Name": "Santacruz Silver Mining Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VAC",
                "Market": "TO",
                "Name": "SciVac Therapeutics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SEA",
                "Market": "TO",
                "Name": "Seabridge Gold Inc.",
                "USSymbol": "SA",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SCC",
                "Market": "TO",
                "Name": "Sears Canada Inc.",
                "USSymbol": "SRSC",
                "Sector": "Diversified Industries",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SMF",
                "Market": "TO",
                "Name": "Semafo Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OMX Nordic Exchange"
            },
            {
                "Symbol": "SBI",
                "Market": "TO",
                "Name": "Serabi Gold plc",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "AIM"
            },
            {
                "Symbol": "SEN",
                "Market": "TO",
                "Name": "Serinus Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "Warsaw"
            },
            {
                "Symbol": "SNM",
                "Market": "V",
                "Name": "ShaMaran Petroleum Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OMX"
            },
            {
                "Symbol": "SJR.B",
                "Market": "TO",
                "Name": "Shaw Communications Inc.",
                "USSymbol": "SJR",
                "Sector": "Comm & Media",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SGW",
                "Market": "V",
                "Name": "Shoal Games Ltd.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQB"
            },
            {
                "Symbol": "SH",
                "Market": "TO",
                "Name": "Shopify Inc.",
                "USSymbol": "SHOP",
                "Sector": "Technology",
                "OTC": "NYSE"
            },
            {
                "Symbol": "NAA",
                "Market": "V",
                "Name": "Sierra Iron Ore Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SMT",
                "Market": "TO",
                "Name": "Sierra Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "SW",
                "Market": "TO",
                "Name": "Sierra Wireless Inc.",
                "USSymbol": "SWIR",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SVB",
                "Market": "TO",
                "Name": "Silver Bull Resources",
                "USSymbol": "Inc.",
                "Sector": "",
                "OTC": "Mining "
            },
            {
                "Symbol": "SSO",
                "Market": "TO",
                "Name": "Silver Standard Resources Inc.",
                "USSymbol": "SSRI",
                "Sector": "Mining",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SLW",
                "Market": "TO",
                "Name": "Silver Wheaton Corp.",
                "USSymbol": "SLW",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SVM",
                "Market": "TO",
                "Name": "Silvercorp Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SVL",
                "Market": "TO",
                "Name": "SilverCrest Mines Inc.",
                "USSymbol": "SVLC",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "SV",
                "Market": "V",
                "Name": "Simavita Limited",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "ASX"
            },
            {
                "Symbol": "SMB",
                "Market": "V",
                "Name": "Simba Energy Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SBM",
                "Market": "V",
                "Name": "Sirona Biochem Corp.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SMA",
                "Market": "TO",
                "Name": "SMART Technologies Inc.",
                "USSymbol": "SMT",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SLR",
                "Market": "TO",
                "Name": "Solitario Exploration & Royalty Corp.",
                "USSymbol": "XPL",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "SVV",
                "Market": "V",
                "Name": "Solvista Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SA",
                "Market": "V",
                "Name": "Southern Arc Minerals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SGQ",
                "Market": "TO",
                "Name": "SouthGobi Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "HKEx"
            },
            {
                "Symbol": "EDT",
                "Market": "TO",
                "Name": "Spectral Medical Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "PHY.U",
                "Market": "TO",
                "Name": "Sprott Physical Gold Trust",
                "USSymbol": "",
                "Sector": "Closed-End Funds",
                "OTC": "NYSE Arca"
            },
            {
                "Symbol": "PPT.U",
                "Market": "TO",
                "Name": "Sprott Physical Platinum and Palladium Trust",
                "USSymbol": "SPPP",
                "Sector": "Closed-End Funds",
                "OTC": "NYSE Arca"
            },
            {
                "Symbol": "PHS.U",
                "Market": "TO",
                "Name": "Sprott Physical Silver Trust",
                "USSymbol": "",
                "Sector": "Closed-End Funds",
                "OTC": "NYSE Arca"
            },
            {
                "Symbol": "SGL",
                "Market": "TO",
                "Name": "Spyglass Resources Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SQD",
                "Market": "V",
                "Name": "SQI Diagnostics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SAS",
                "Market": "TO",
                "Name": "St Andrew Goldfields Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SGH",
                "Market": "V",
                "Name": "Standard Graphite Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "HRE",
                "Market": "V",
                "Name": "Stans Energy Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "STN",
                "Market": "TO",
                "Name": "Stantec Inc.",
                "USSymbol": "STN",
                "Sector": "Diversified Industries",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SXE",
                "Market": "V",
                "Name": "Strata-X Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "ASX"
            },
            {
                "Symbol": "STB",
                "Market": "TO",
                "Name": "Student Transportation Inc.",
                "USSymbol": "STB",
                "Sector": "Diversified Industries",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SLF",
                "Market": "TO",
                "Name": "Sun Life Financial Inc.",
                "USSymbol": "SLF",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SU",
                "Market": "TO",
                "Name": "Suncor Energy Inc.",
                "USSymbol": "SU",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "SOY",
                "Market": "TO",
                "Name": "SunOpta Inc.",
                "USSymbol": "STKL",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "SGC",
                "Market": "V",
                "Name": "Sunridge Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SSM",
                "Market": "V",
                "Name": "Sunset Cove Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "LIMA (BVL)"
            },
            {
                "Symbol": "SUO",
                "Market": "TO",
                "Name": "Sunshine Oilsands Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "HKEx"
            },
            {
                "Symbol": "SGM",
                "Market": "V",
                "Name": "Sutter Gold Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "SY",
                "Market": "V",
                "Name": "Symbility Solutions Inc.",
                "USSymbol": "",
                "Sector": "Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "THO",
                "Market": "TO",
                "Name": "Tahoe Resources Inc.",
                "USSymbol": "TAHO",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "THO",
                "Market": "TO",
                "Name": "Tahoe Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TPN",
                "Market": "V",
                "Name": "Taipan Resources Inc.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TNX",
                "Market": "TO",
                "Name": "Tanzanian Royalty Exploration Corporation",
                "USSymbol": "TRX",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TKO",
                "Market": "TO",
                "Name": "Taseko Mines Limited",
                "USSymbol": "TGB",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TSM",
                "Market": "V",
                "Name": "Tasman Metals Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TLB",
                "Market": "TO",
                "Name": "TearLab Corporation",
                "USSymbol": "TEAR",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "TCK.B",
                "Market": "TO",
                "Name": "Teck Resources Limited",
                "USSymbol": "TCK",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TST",
                "Market": "TO",
                "Name": "Telesta Therapeutics Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "ASX"
            },
            {
                "Symbol": "TO",
                "Market": "TO",
                "Name": "TELUS Corporation",
                "USSymbol": "TU",
                "Sector": "Comm & Media",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TEM",
                "Market": "V",
                "Name": "Tembo Gold Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TGZ",
                "Market": "TO",
                "Name": "Teranga Gold Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "TRA",
                "Market": "V",
                "Name": "Teras Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TGC",
                "Market": "V",
                "Name": "Terra Nova Energy Ltd.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TZR",
                "Market": "V",
                "Name": "Terrace Energy Corp.",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TPL",
                "Market": "TO",
                "Name": "Tethys Petroleum Limited",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "LSE"
            },
            {
                "Symbol": "TCM",
                "Market": "TO",
                "Name": "Thompson Creek Metals Company Inc.",
                "USSymbol": "TC",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TRI",
                "Market": "TO",
                "Name": "Thomson Reuters Corporation",
                "USSymbol": "TRI",
                "Sector": "Comm & Media",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TBR",
                "Market": "V",
                "Name": "Timberline Resources Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TMM",
                "Market": "TO",
                "Name": "Timmins Gold Corp.",
                "USSymbol": "TGD",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TAU",
                "Market": "V",
                "Name": "Tintina Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TXX",
                "Market": "V",
                "Name": "Tirex Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TD",
                "Market": "TO",
                "Name": "Toronto-Dominion Bank (The)",
                "USSymbol": "TD",
                "Sector": "Financial Services",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TA",
                "Market": "TO",
                "Name": "TransAlta Corporation",
                "USSymbol": "TAC",
                "Sector": "Utilities & Pipelines",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TNP",
                "Market": "TO",
                "Name": "TransAtlantic Petroleum Ltd.",
                "USSymbol": "TAT",
                "Sector": "Oil & Gas",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TRP",
                "Market": "TO",
                "Name": "TransCanada Corporation",
                "USSymbol": "TRP",
                "Sector": "Utilities & Pipelines",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TFI",
                "Market": "TO",
                "Name": "TransForce Inc.",
                "USSymbol": "",
                "Sector": "Diversified Industries",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TGL",
                "Market": "TO",
                "Name": "TransGlobe Energy Corporation",
                "USSymbol": "TGA",
                "Sector": "Oil & Gas",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "TTH",
                "Market": "TO",
                "Name": "Transition Therapeutics Inc.",
                "USSymbol": "TTHI",
                "Sector": "Life Sciences",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "TV",
                "Market": "TO",
                "Name": "Trevali Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TV",
                "Market": "TO",
                "Name": "Trevali Mining Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "TRX",
                "Market": "V",
                "Name": "Tribute Pharmaceuticals Canada Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TR",
                "Market": "TO",
                "Name": "Trillium Therapeutics Inc.",
                "USSymbol": "TRIL",
                "Sector": "Life Sciences",
                "OTC": "NasdaqCM"
            },
            {
                "Symbol": "TMI",
                "Market": "TO",
                "Name": "TriMetals Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TGM",
                "Market": "V",
                "Name": "True Gold Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TRM",
                "Market": "V",
                "Name": "Trueclaim Exploration Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "TC",
                "Market": "TO",
                "Name": "Tucows Inc.",
                "USSymbol": "TCX",
                "Sector": "Technology",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "TRQ",
                "Market": "TO",
                "Name": "Turquoise Hill Resources Ltd.",
                "USSymbol": "TRQ",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "TVI",
                "Market": "TO",
                "Name": "TVI Pacific Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "GTH",
                "Market": "TO",
                "Name": "U.S. Geothermal Inc.",
                "USSymbol": "HTM",
                "Sector": "Clean Technology",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "UWE",
                "Market": "TO",
                "Name": "U3O8 Corp.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "UCU",
                "Market": "V",
                "Name": "Ucore Rare Metals Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "URE",
                "Market": "TO",
                "Name": "Ur-Energy Inc.",
                "USSymbol": "URG",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "VRX",
                "Market": "TO",
                "Name": "Valeant Pharmaceuticals International Inc.",
                "USSymbol": "VRX",
                "Sector": "Life Sciences",
                "OTC": "NYSE"
            },
            {
                "Symbol": "VRB",
                "Market": "V",
                "Name": "Vanadiumcorp Resource Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VEM",
                "Market": "TO",
                "Name": "Vena Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "Lima (BVL)"
            },
            {
                "Symbol": "VPT",
                "Market": "V",
                "Name": "VentriPoint Diagnostics Ltd.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VRS",
                "Market": "V",
                "Name": "Verisante Technology Inc.",
                "USSymbol": "",
                "Sector": "Life Sciences",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VET",
                "Market": "TO",
                "Name": "Vermilion Energy Inc.",
                "USSymbol": "VET",
                "Sector": "Oil & Gas",
                "OTC": "NYSE"
            },
            {
                "Symbol": "VR",
                "Market": "V",
                "Name": "Victory Resources Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VFF",
                "Market": "TO",
                "Name": "Village Farms International Inc.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VUI",
                "Market": "V",
                "Name": "Virginia Energy Resources Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "VGZ",
                "Market": "TO",
                "Name": "Vista Gold Corp.",
                "USSymbol": "VGZ",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "WEE",
                "Market": "V",
                "Name": "Wavefront Technology Solutions Inc.",
                "USSymbol": "",
                "Sector": "Clean Technology",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "WAF",
                "Market": "V",
                "Name": "West African Resources Limited",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "ASX"
            },
            {
                "Symbol": "WRN",
                "Market": "TO",
                "Name": "Western Copper and Gold Corporation",
                "USSymbol": "WRN",
                "Sector": "Mining",
                "OTC": "NYSE MKT"
            },
            {
                "Symbol": "WLC",
                "Market": "TO",
                "Name": "Western Lithium USA Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "WMR",
                "Market": "V",
                "Name": "Westminster Resources Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "WPT",
                "Market": "TO",
                "Name": "Westport Innovations Inc.",
                "USSymbol": "WPRT",
                "Sector": "Clean Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "WIN",
                "Market": "TO",
                "Name": "Wi-LAN Inc.",
                "USSymbol": "WILN",
                "Sector": "Technology",
                "OTC": "NasdaqGM"
            },
            {
                "Symbol": "WIR.U",
                "Market": "TO",
                "Name": "WPT Industrial Real Estate Investment Trust",
                "USSymbol": "",
                "Sector": "Real Estate",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "XEL",
                "Market": "V",
                "Name": "Xcite Energy Limited",
                "USSymbol": "",
                "Sector": "Oil & Gas",
                "OTC": "AIM"
            },
            {
                "Symbol": "XME",
                "Market": "V",
                "Name": "Xmet Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "YRI",
                "Market": "TO",
                "Name": "Yamana Gold Inc.",
                "USSymbol": "AUY",
                "Sector": "Mining",
                "OTC": "NYSE"
            },
            {
                "Symbol": "YMI",
                "Market": "TO",
                "Name": "Yellowhead Mining Inc.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ZAZ",
                "Market": "TO",
                "Name": "Zazu Metals Corporation",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            },
            {
                "Symbol": "ZEN",
                "Market": "V",
                "Name": "Zenyatta Ventures Ltd.",
                "USSymbol": "",
                "Sector": "Mining",
                "OTC": "OTCQX"
            }

        ];

    return {
        getTickers: function(){
            return tickers;
        },
        getTickersSectorBySymbol: function(thisSymbol){
           return _.where(tickers, {Sector: this.getSector(thisSymbol)});
        },
        getTickersBySector: function(thisSector){
            return _.where(tickers, {Sector: thisSector});
        },
        getSector: function(thisSymbol){
           var match = _.findWhere(tickers, {Symbol: thisSymbol});
            return match.Sector;
        },
        getSectors: function(){
            return _.uniq(_.pluck(_.flatten(tickers), "Sector"));
        }

    }
});
