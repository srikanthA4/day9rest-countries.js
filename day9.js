// 1.Solving problems using array functions on rest countries data.
//   a.Get all the countries from Asia continent /region using Filter function
                  
<!DOCTYPE html>
<html>
    <head>rest countries</head>
    <p>countries from asia</p>
    <body>
        <script>
            var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
        </script>
    </body>
</html>
// Output:
// 0: {name: 'Afghanistan', topLevelDomain: Array(1), alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: Array(1), …}
// 1: {name: 'Armenia', topLevelDomain: Array(1), alpha2Code: 'AM', alpha3Code: 'ARM', callingCodes: Array(1), …}
// 2: {name: 'Azerbaijan', topLevelDomain: Array(1), alpha2Code: 'AZ', alpha3Code: 'AZE', callingCodes: Array(1), …}
// 3: {name: 'Bahrain', topLevelDomain: Array(1), alpha2Code: 'BH', alpha3Code: 'BHR', callingCodes: Array(1), …}
// 4: {name: 'Bangladesh', topLevelDomain: Array(1), alpha2Code: 'BD', alpha3Code: 'BGD', callingCodes: Array(1), …}
// 5: {name: 'Bhutan', topLevelDomain: Array(1), alpha2Code: 'BT', alpha3Code: 'BTN', callingCodes: Array(1), …}
// 6: {name: 'Brunei Darussalam', topLevelDomain: Array(1), alpha2Code: 'BN', alpha3Code: 'BRN', callingCodes: Array(1), …}
// 7: {name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
// 8: {name: 'China', topLevelDomain: Array(1), alpha2Code: 'CN', alpha3Code: 'CHN', callingCodes: Array(1), …}
// 9: {name: 'Georgia', topLevelDomain: Array(1), alpha2Code: 'GE', alpha3Code: 'GEO', callingCodes: Array(1), …}
// 10: {name: 'Hong Kong', topLevelDomain: Array(1), alpha2Code: 'HK', alpha3Code: 'HKG', callingCodes: Array(1), …}
// 11: {name: 'India', topLevelDomain: Array(1), alpha2Code: 'IN', alpha3Code: 'IND', callingCodes: Array(1), …}
// 12: {name: 'Indonesia', topLevelDomain: Array(1), alpha2Code: 'ID', alpha3Code: 'IDN', callingCodes: Array(1), …}
// 13: {name: 'Iran (Islamic Republic of)', topLevelDomain: Array(1), alpha2Code: 'IR', alpha3Code: 'IRN', callingCodes: Array(1), …}
// 14: {name: 'Iraq', topLevelDomain: Array(1), alpha2Code: 'IQ', alpha3Code: 'IRQ', callingCodes: Array(1), …}
// 15: {name: 'Israel', topLevelDomain: Array(1), alpha2Code: 'IL', alpha3Code: 'ISR', callingCodes: Array(1), …}
// 16: {name: 'Japan', topLevelDomain: Array(1), alpha2Code: 'JP', alpha3Code: 'JPN', callingCodes: Array(1), …}
// 17: {name: 'Jordan', topLevelDomain: Array(1), alpha2Code: 'JO', alpha3Code: 'JOR', callingCodes: Array(1), …}
// 18: {name: 'Kazakhstan', topLevelDomain: Array(2), alpha2Code: 'KZ', alpha3Code: 'KAZ', callingCodes: Array(2), …}
// 19: {name: 'Kuwait', topLevelDomain: Array(1), alpha2Code: 'KW', alpha3Code: 'KWT', callingCodes: Array(1), …}
// 20: {name: 'Kyrgyzstan', topLevelDomain: Array(1), alpha2Code: 'KG', alpha3Code: 'KGZ', callingCodes: Array(1), …}
// 21: {name: "Lao People's Democratic Republic", topLevelDomain: Array(1), alpha2Code: 'LA', alpha3Code: 'LAO', callingCodes: Array(1), …}
// 22: {name: 'Lebanon', topLevelDomain: Array(1), alpha2Code: 'LB', alpha3Code: 'LBN', callingCodes: Array(1), …}
// 23: {name: 'Macao', topLevelDomain: Array(1), alpha2Code: 'MO', alpha3Code: 'MAC', callingCodes: Array(1), …}
// 24: {name: 'Malaysia', topLevelDomain: Array(1), alpha2Code: 'MY', alpha3Code: 'MYS', callingCodes: Array(1), …}
// 25: {name: 'Maldives', topLevelDomain: Array(1), alpha2Code: 'MV', alpha3Code: 'MDV', callingCodes: Array(1), …}
// 26: {name: 'Mongolia', topLevelDomain: Array(1), alpha2Code: 'MN', alpha3Code: 'MNG', callingCodes: Array(1), …}
// 27: {name: 'Myanmar', topLevelDomain: Array(1), alpha2Code: 'MM', alpha3Code: 'MMR', callingCodes: Array(1), …}
// 28: {name: 'Nepal', topLevelDomain: Array(1), alpha2Code: 'NP', alpha3Code: 'NPL', callingCodes: Array(1), …}
// 29: {name: "Korea (Democratic People's Republic of)", topLevelDomain: Array(1), alpha2Code: 'KP', alpha3Code: 'PRK', callingCodes: Array(1), …}
// 30: {name: 'Oman', topLevelDomain: Array(1), alpha2Code: 'OM', alpha3Code: 'OMN', callingCodes: Array(1), …}
// 31: {name: 'Pakistan', topLevelDomain: Array(1), alpha2Code: 'PK', alpha3Code: 'PAK', callingCodes: Array(1), …}
// 32: {name: 'Palestine, State of', topLevelDomain: Array(1), alpha2Code: 'PS', alpha3Code: 'PSE', callingCodes: Array(1), …}
// 33: {name: 'Philippines', topLevelDomain: Array(1), alpha2Code: 'PH', alpha3Code: 'PHL', callingCodes: Array(1), …}
// 34: {name: 'Qatar', topLevelDomain: Array(1), alpha2Code: 'QA', alpha3Code: 'QAT', callingCodes: Array(1), …}
// 35: {name: 'Saudi Arabia', topLevelDomain: Array(1), alpha2Code: 'SA', alpha3Code: 'SAU', callingCodes: Array(1), …}
// 36: {name: 'Singapore', topLevelDomain: Array(1), alpha2Code: 'SG', alpha3Code: 'SGP', callingCodes: Array(1), …}
// 37: {name: 'Korea (Republic of)', topLevelDomain: Array(1), alpha2Code: 'KR', alpha3Code: 'KOR', callingCodes: Array(1), …}
// 38: {name: 'Sri Lanka', topLevelDomain: Array(1), alpha2Code: 'LK', alpha3Code: 'LKA', callingCodes: Array(1), …}
// 39: {name: 'Syrian Arab Republic', topLevelDomain: Array(1), alpha2Code: 'SY', alpha3Code: 'SYR', callingCodes: Array(1), …}
// 40: {name: 'Taiwan', topLevelDomain: Array(1), alpha2Code: 'TW', alpha3Code: 'TWN', callingCodes: Array(1), …}
// 41: {name: 'Tajikistan', topLevelDomain: Array(1), alpha2Code: 'TJ', alpha3Code: 'TJK', callingCodes: Array(1), …}
// 42: {name: 'Thailand', topLevelDomain: Array(1), alpha2Code: 'TH', alpha3Code: 'THA', callingCodes: Array(1), …}
// 43: {name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
// 44: {name: 'Turkey', topLevelDomain: Array(1), alpha2Code: 'TR', alpha3Code: 'TUR', callingCodes: Array(1), …}
// 45: {name: 'Turkmenistan', topLevelDomain: Array(1), alpha2Code: 'TM', alpha3Code: 'TKM', callingCodes: Array(1), …}
// 46: {name: 'United Arab Emirates', topLevelDomain: Array(1), alpha2Code: 'AE', alpha3Code: 'ARE', callingCodes: Array(1), …}
// 47: {name: 'Uzbekistan', topLevelDomain: Array(1), alpha2Code: 'UZ', alpha3Code: 'UZB', callingCodes: Array(1), …}
// 48: {name: 'Viet Nam', topLevelDomain: Array(1), alpha2Code: 'VN', alpha3Code: 'VNM', callingCodes: Array(1), …}
// 49: {name: 'Yemen', topLevelDomain: Array(1), alpha2Code: 'YE', alpha3Code: 'YEM', callingCodes: Array(1), …}
// length: 50
// [[Prototype]]: Array(0)
b.Get all the countries with a population of less than 2 lakhs using Filter function
<!DOCTYPE html>
<html>
    <head>rest countries</head>
    <p>countries from asia</p>
    <body>
        <script>
            var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','tru');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}
        </script>
    </body>
</html>
//output:
// 0: {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// 1: {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
// 2: {name: 'Andorra', topLevelDomain: Array(1), alpha2Code: 'AD', alpha3Code: 'AND', callingCodes: Array(1), …}
// 3: {name: 'Anguilla', topLevelDomain: Array(1), alpha2Code: 'AI', alpha3Code: 'AIA', callingCodes: Array(1), …}
// 4: {name: 'Antarctica', topLevelDomain: Array(1), alpha2Code: 'AQ', alpha3Code: 'ATA', callingCodes: Array(1), …}
// 5: {name: 'Antigua and Barbuda', topLevelDomain: Array(1), alpha2Code: 'AG', alpha3Code: 'ATG', callingCodes: Array(1), …}
// 6: {name: 'Aruba', topLevelDomain: Array(1), alpha2Code: 'AW', alpha3Code: 'ABW', callingCodes: Array(1), …}
// 7: {name: 'Bermuda', topLevelDomain: Array(1), alpha2Code: 'BM', alpha3Code: 'BMU', callingCodes: Array(1), …}
// 8: {name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
// 9: {name: 'Bouvet Island', topLevelDomain: Array(1), alpha2Code: 'BV', alpha3Code: 'BVT', callingCodes: Array(1), …}
// 10: {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
// 11: {name: 'United States Minor Outlying Islands', topLevelDomain: Array(1), alpha2Code: 'UM', alpha3Code: 'UMI', callingCodes: Array(1), …}
// 12: {name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
// 13: {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
// 14: {name: 'Cayman Islands', topLevelDomain: Array(1), alpha2Code: 'KY', alpha3Code: 'CYM', callingCodes: Array(1), …}
// 15: {name: 'Christmas Island', topLevelDomain: Array(1), alpha2Code: 'CX', alpha3Code: 'CXR', callingCodes: Array(1), …}
// 16: {name: 'Cocos (Keeling) Islands', topLevelDomain: Array(1), alpha2Code: 'CC', alpha3Code: 'CCK', callingCodes: Array(1), …}
// 17: {name: 'Cook Islands', topLevelDomain: Array(1), alpha2Code: 'CK', alpha3Code: 'COK', callingCodes: Array(1), …}
// 18: {name: 'Curaçao', topLevelDomain: Array(1), alpha2Code: 'CW', alpha3Code: 'CUW', callingCodes: Array(1), …}
// 19: {name: 'Dominica', topLevelDomain: Array(1), alpha2Code: 'DM', alpha3Code: 'DMA', callingCodes: Array(1), …}
// 20: {name: 'Falkland Islands (Malvinas)', topLevelDomain: Array(1), alpha2Code: 'FK', alpha3Code: 'FLK', callingCodes: Array(1), …}
// 21: {name: 'Faroe Islands', topLevelDomain: Array(1), alpha2Code: 'FO', alpha3Code: 'FRO', callingCodes: Array(1), …}
// 22: {name: 'French Southern Territories', topLevelDomain: Array(1), alpha2Code: 'TF', alpha3Code: 'ATF', callingCodes: Array(1), …}
// 23: {name: 'Gibraltar', topLevelDomain: Array(1), alpha2Code: 'GI', alpha3Code: 'GIB', callingCodes: Array(1), …}
// 24: {name: 'Greenland', topLevelDomain: Array(1), alpha2Code: 'GL', alpha3Code: 'GRL', callingCodes: Array(1), …}
// 25: {name: 'Grenada', topLevelDomain: Array(1), alpha2Code: 'GD', alpha3Code: 'GRD', callingCodes: Array(1), …}
// 26: {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
// 27: {name: 'Guernsey', topLevelDomain: Array(1), alpha2Code: 'GG', alpha3Code: 'GGY', callingCodes: Array(1), …}
// 28: {name: 'Heard Island and McDonald Islands', topLevelDomain: Array(2), alpha2Code: 'HM', alpha3Code: 'HMD', callingCodes: Array(1), …}
// 29: {name: 'Holy See', topLevelDomain: Array(1), alpha2Code: 'VA', alpha3Code: 'VAT', callingCodes: Array(1), …}
// 30: {name: 'Isle of Man', topLevelDomain: Array(1), alpha2Code: 'IM', alpha3Code: 'IMN', callingCodes: Array(1), …}
// 31: {name: 'Jersey', topLevelDomain: Array(1), alpha2Code: 'JE', alpha3Code: 'JEY', callingCodes: Array(1), …}
// 32: {name: 'Kiribati', topLevelDomain: Array(1), alpha2Code: 'KI', alpha3Code: 'KIR', callingCodes: Array(1), …}
// 33: {name: 'Liechtenstein', topLevelDomain: Array(1), alpha2Code: 'LI', alpha3Code: 'LIE', callingCodes: Array(1), …}
// 34: {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
// 35: {name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
// 36: {name: 'Monaco', topLevelDomain: Array(1), alpha2Code: 'MC', alpha3Code: 'MCO', callingCodes: Array(1), …}
// 37: {name: 'Montserrat', topLevelDomain: Array(1), alpha2Code: 'MS', alpha3Code: 'MSR', callingCodes: Array(1), …}
// 38: {name: 'Nauru', topLevelDomain: Array(1), alpha2Code: 'NR', alpha3Code: 'NRU', callingCodes: Array(1), …}
// 39: {name: 'Niue', topLevelDomain: Array(1), alpha2Code: 'NU', alpha3Code: 'NIU', callingCodes: Array(1), …}
// 40: {name: 'Norfolk Island', topLevelDomain: Array(1), alpha2Code: 'NF', alpha3Code: 'NFK', callingCodes: Array(1), …}
// 41: {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
// 42: {name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
// 43: {name: 'Pitcairn', topLevelDomain: Array(1), alpha2Code: 'PN', alpha3Code: 'PCN', callingCodes: Array(1), …}
// 44: {name: 'Saint Barthélemy', topLevelDomain: Array(1), alpha2Code: 'BL', alpha3Code: 'BLM', callingCodes: Array(1), …}
// 45: {name: 'Saint Helena, Ascension and Tristan da Cunha', topLevelDomain: Array(1), alpha2Code: 'SH', alpha3Code: 'SHN', callingCodes: Array(1), …}
// 46: {name: 'Saint Kitts and Nevis', topLevelDomain: Array(1), alpha2Code: 'KN', alpha3Code: 'KNA', callingCodes: Array(1), …}
// 47: {name: 'Saint Lucia', topLevelDomain: Array(1), alpha2Code: 'LC', alpha3Code: 'LCA', callingCodes: Array(1), …}
// 48: {name: 'Saint Martin (French part)', topLevelDomain: Array(3), alpha2Code: 'MF', alpha3Code: 'MAF', callingCodes: Array(1), …}
// 49: {name: 'Saint Pierre and Miquelon', topLevelDomain: Array(1), alpha2Code: 'PM', alpha3Code: 'SPM', callingCodes: Array(1), …}
// 50: {name: 'Saint Vincent and the Grenadines', topLevelDomain: Array(1), alpha2Code: 'VC', alpha3Code: 'VCT', callingCodes: Array(1), …}
// 51: {name: 'Samoa', topLevelDomain: Array(1), alpha2Code: 'WS', alpha3Code: 'WSM', callingCodes: Array(1), …}
// 52: {name: 'San Marino', topLevelDomain: Array(1), alpha2Code: 'SM', alpha3Code: 'SMR', callingCodes: Array(1), …}
// 53: {name: 'Sao Tome and Principe', topLevelDomain: Array(1), alpha2Code: 'ST', alpha3Code: 'STP', callingCodes: Array(1), …}
// 54: {name: 'Seychelles', topLevelDomain: Array(1), alpha2Code: 'SC', alpha3Code: 'SYC', callingCodes: Array(1), …}
// 55: {name: 'Sint Maarten (Dutch part)', topLevelDomain: Array(1), alpha2Code: 'SX', alpha3Code: 'SXM', callingCodes: Array(1), …}
// 56: {name: 'South Georgia and the South Sandwich Islands', topLevelDomain: Array(1), alpha2Code: 'GS', alpha3Code: 'SGS', callingCodes: Array(1), …}
// 57: {name: 'Svalbard and Jan Mayen', topLevelDomain: Array(1), alpha2Code: 'SJ', alpha3Code: 'SJM', callingCodes: Array(1), …}
// 58: {name: 'Tokelau', topLevelDomain: Array(1), alpha2Code: 'TK', alpha3Code: 'TKL', callingCodes: Array(1), …}
// 59: {name: 'Tonga', topLevelDomain: Array(1), alpha2Code: 'TO', alpha3Code: 'TON', callingCodes: Array(1), …}
// 60: {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
// 61: {name: 'Tuvalu', topLevelDomain: Array(1), alpha2Code: 'TV', alpha3Code: 'TUV', callingCodes: Array(1), …}
// 62: {name: 'Wallis and Futuna', topLevelDomain: Array(1), alpha2Code: 'WF', alpha3Code: 'WLF', callingCodes: Array(1), …}
// length: 63
// [[Prototype]]: Array(0)

 C.Print the following details name, capital, flag using forEach function
  <!DOCTYPE html>
<html>
    <head>rest countries</head>
    <p>countries from asia</p>
    <body>
        <script>
            var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}
        </script>
    </body>
</html>
ouput:
//  <!-- Afghanistan Kabul https://restcountries.eu/data/afg.svg
// index.html:13 Åland Islands Mariehamn https://restcountries.eu/data/ala.svg
// index.html:13 Albania Tirana https://restcountries.eu/data/alb.svg
// index.html:13 Algeria Algiers https://restcountries.eu/data/dza.svg
// index.html:13 American Samoa Pago Pago https://restcountries.eu/data/asm.svg
// index.html:13 Andorra Andorra la Vella https://restcountries.eu/data/and.svg
// index.html:13 Angola Luanda https://restcountries.eu/data/ago.svg
// index.html:13 Anguilla The Valley https://restcountries.eu/data/aia.svg
// index.html:13 Antarctica  https://restcountries.eu/data/ata.svg
// index.html:13 Antigua and Barbuda Saint John's https://restcountries.eu/data/atg.svg
// index.html:13 Argentina Buenos Aires https://restcountries.eu/data/arg.svg
// index.html:13 Armenia Yerevan https://restcountries.eu/data/arm.svg
// index.html:13 Aruba Oranjestad https://restcountries.eu/data/abw.svg
// index.html:13 Australia Canberra https://restcountries.eu/data/aus.svg
// index.html:13 Austria Vienna https://restcountries.eu/data/aut.svg
// index.html:13 Azerbaijan Baku https://restcountries.eu/data/aze.svg
// index.html:13 Bahamas Nassau https://restcountries.eu/data/bhs.svg
// index.html:13 Bahrain Manama https://restcountries.eu/data/bhr.svg
// index.html:13 Bangladesh Dhaka https://restcountries.eu/data/bgd.svg
// index.html:13 Barbados Bridgetown https://restcountries.eu/data/brb.svg
// index.html:13 Belarus Minsk https://restcountries.eu/data/blr.svg
// index.html:13 Belgium Brussels https://restcountries.eu/data/bel.svg
// index.html:13 Belize Belmopan https://restcountries.eu/data/blz.svg
// index.html:13 Benin Porto-Novo https://restcountries.eu/data/ben.svg
// index.html:13 Bermuda Hamilton https://restcountries.eu/data/bmu.svg
// index.html:13 Bhutan Thimphu https://restcountries.eu/data/btn.svg
// index.html:13 Bolivia (Plurinational State of) Sucre https://restcountries.eu/data/bol.svg
// index.html:13 Bonaire, Sint Eustatius and Saba Kralendijk https://restcountries.eu/data/bes.svg
// index.html:13 Bosnia and Herzegovina Sarajevo https://restcountries.eu/data/bih.svg
// index.html:13 Botswana Gaborone https://restcountries.eu/data/bwa.svg
// index.html:13 Bouvet Island  https://restcountries.eu/data/bvt.svg
// index.html:13 Brazil Brasília https://restcountries.eu/data/bra.svg
// index.html:13 British Indian Ocean Territory Diego Garcia https://restcountries.eu/data/iot.svg
// index.html:13 United States Minor Outlying Islands  https://restcountries.eu/data/umi.svg
// index.html:13 Virgin Islands (British) Road Town https://restcountries.eu/data/vgb.svg
// index.html:13 Virgin Islands (U.S.) Charlotte Amalie https://restcountries.eu/data/vir.svg
// index.html:13 Brunei Darussalam Bandar Seri Begawan https://restcountries.eu/data/brn.svg
// index.html:13 Bulgaria Sofia https://restcountries.eu/data/bgr.svg
// index.html:13 Burkina Faso Ouagadougou https://restcountries.eu/data/bfa.svg
// index.html:13 Burundi Bujumbura https://restcountries.eu/data/bdi.svg
// index.html:13 Cambodia Phnom Penh https://restcountries.eu/data/khm.svg
// index.html:13 Cameroon Yaoundé https://restcountries.eu/data/cmr.svg
// index.html:13 Canada Ottawa https://restcountries.eu/data/can.svg
// index.html:13 Cabo Verde Praia https://restcountries.eu/data/cpv.svg
// index.html:13 Cayman Islands George Town https://restcountries.eu/data/cym.svg
// index.html:13 Central African Republic Bangui https://restcountries.eu/data/caf.svg
// index.html:13 Chad N'Djamena https://restcountries.eu/data/tcd.svg
// index.html:13 Chile Santiago https://restcountries.eu/data/chl.svg
// index.html:13 China Beijing https://restcountries.eu/data/chn.svg
// index.html:13 Christmas Island Flying Fish Cove https://restcountries.eu/data/cxr.svg
// index.html:13 Cocos (Keeling) Islands West Island https://restcountries.eu/data/cck.svg
// index.html:13 Colombia Bogotá https://restcountries.eu/data/col.svg
// index.html:13 Comoros Moroni https://restcountries.eu/data/com.svg
// index.html:13 Congo Brazzaville https://restcountries.eu/data/cog.svg
// index.html:13 Congo (Democratic Republic of the) Kinshasa https://restcountries.eu/data/cod.svg
// index.html:13 Cook Islands Avarua https://restcountries.eu/data/cok.svg
// index.html:13 Costa Rica San José https://restcountries.eu/data/cri.svg
// index.html:13 Croatia Zagreb https://restcountries.eu/data/hrv.svg
// index.html:13 Cuba Havana https://restcountries.eu/data/cub.svg
// index.html:13 Curaçao Willemstad https://restcountries.eu/data/cuw.svg
// index.html:13 Cyprus Nicosia https://restcountries.eu/data/cyp.svg
// index.html:13 Czech Republic Prague https://restcountries.eu/data/cze.svg
// index.html:13 Denmark Copenhagen https://restcountries.eu/data/dnk.svg
// index.html:13 Djibouti Djibouti https://restcountries.eu/data/dji.svg
// index.html:13 Dominica Roseau https://restcountries.eu/data/dma.svg
// index.html:13 Dominican Republic Santo Domingo https://restcountries.eu/data/dom.svg
// index.html:13 Ecuador Quito https://restcountries.eu/data/ecu.svg
// index.html:13 Egypt Cairo https://restcountries.eu/data/egy.svg
// index.html:13 El Salvador San Salvador https://restcountries.eu/data/slv.svg
// index.html:13 Equatorial Guinea Malabo https://restcountries.eu/data/gnq.svg
// index.html:13 Eritrea Asmara https://restcountries.eu/data/eri.svg
// index.html:13 Estonia Tallinn https://restcountries.eu/data/est.svg
// index.html:13 Ethiopia Addis Ababa https://restcountries.eu/data/eth.svg
// index.html:13 Falkland Islands (Malvinas) Stanley https://restcountries.eu/data/flk.svg
// index.html:13 Faroe Islands Tórshavn https://restcountries.eu/data/fro.svg
// index.html:13 Fiji Suva https://restcountries.eu/data/fji.svg
// index.html:13 Finland Helsinki https://restcountries.eu/data/fin.svg
// index.html:13 France Paris https://restcountries.eu/data/fra.svg
// index.html:13 French Guiana Cayenne https://restcountries.eu/data/guf.svg
// index.html:13 French Polynesia Papeetē https://restcountries.eu/data/pyf.svg
// index.html:13 French Southern Territories Port-aux-Français https://restcountries.eu/data/atf.svg
// index.html:13 Gabon Libreville https://restcountries.eu/data/gab.svg
// index.html:13 Gambia Banjul https://restcountries.eu/data/gmb.svg
// index.html:13 Georgia Tbilisi https://restcountries.eu/data/geo.svg
// index.html:13 Germany Berlin https://restcountries.eu/data/deu.svg
// index.html:13 Ghana Accra https://restcountries.eu/data/gha.svg
// index.html:13 Gibraltar Gibraltar https://restcountries.eu/data/gib.svg
// index.html:13 Greece Athens https://restcountries.eu/data/grc.svg
// index.html:13 Greenland Nuuk https://restcountries.eu/data/grl.svg
// index.html:13 Grenada St. George's https://restcountries.eu/data/grd.svg
// index.html:13 Guadeloupe Basse-Terre https://restcountries.eu/data/glp.svg
// index.html:13 Guam Hagåtña https://restcountries.eu/data/gum.svg
// index.html:13 Guatemala Guatemala City https://restcountries.eu/data/gtm.svg
// index.html:13 Guernsey St. Peter Port https://restcountries.eu/data/ggy.svg
// index.html:13 Guinea Conakry https://restcountries.eu/data/gin.svg
// index.html:13 Guinea-Bissau Bissau https://restcountries.eu/data/gnb.svg
// index.html:13 Guyana Georgetown https://restcountries.eu/data/guy.svg
// index.html:13 Haiti Port-au-Prince https://restcountries.eu/data/hti.svg
// index.html:13 Heard Island and McDonald Islands  https://restcountries.eu/data/hmd.svg
// index.html:13 Holy See Rome https://restcountries.eu/data/vat.svg
// index.html:13 Honduras Tegucigalpa https://restcountries.eu/data/hnd.svg
// index.html:13 Hong Kong City of Victoria https://restcountries.eu/data/hkg.svg
// index.html:13 Hungary Budapest https://restcountries.eu/data/hun.svg
// index.html:13 Iceland Reykjavík https://restcountries.eu/data/isl.svg
// index.html:13 India New Delhi https://restcountries.eu/data/ind.svg
// index.html:13 Indonesia Jakarta https://restcountries.eu/data/idn.svg
// index.html:13 Côte d'Ivoire Yamoussoukro https://restcountries.eu/data/civ.svg
// index.html:13 Iran (Islamic Republic of) Tehran https://restcountries.eu/data/irn.svg
// index.html:13 Iraq Baghdad https://restcountries.eu/data/irq.svg
// index.html:13 Ireland Dublin https://restcountries.eu/data/irl.svg
// index.html:13 Isle of Man Douglas https://restcountries.eu/data/imn.svg
// index.html:13 Israel Jerusalem https://restcountries.eu/data/isr.svg
// index.html:13 Italy Rome https://restcountries.eu/data/ita.svg
// index.html:13 Jamaica Kingston https://restcountries.eu/data/jam.svg
// index.html:13 Japan Tokyo https://restcountries.eu/data/jpn.svg
// index.html:13 Jersey Saint Helier https://restcountries.eu/data/jey.svg
// index.html:13 Jordan Amman https://restcountries.eu/data/jor.svg
// index.html:13 Kazakhstan Astana https://restcountries.eu/data/kaz.svg
// index.html:13 Kenya Nairobi https://restcountries.eu/data/ken.svg
// index.html:13 Kiribati South Tarawa https://restcountries.eu/data/kir.svg
// index.html:13 Kuwait Kuwait City https://restcountries.eu/data/kwt.svg
// index.html:13 Kyrgyzstan Bishkek https://restcountries.eu/data/kgz.svg
// index.html:13 Lao People's Democratic Republic Vientiane https://restcountries.eu/data/lao.svg
// index.html:13 Latvia Riga https://restcountries.eu/data/lva.svg
// index.html:13 Lebanon Beirut https://restcountries.eu/data/lbn.svg
// index.html:13 Lesotho Maseru https://restcountries.eu/data/lso.svg
// index.html:13 Liberia Monrovia https://restcountries.eu/data/lbr.svg
// index.html:13 Libya Tripoli https://restcountries.eu/data/lby.svg
// index.html:13 Liechtenstein Vaduz https://restcountries.eu/data/lie.svg
// index.html:13 Lithuania Vilnius https://restcountries.eu/data/ltu.svg
// index.html:13 Luxembourg Luxembourg https://restcountries.eu/data/lux.svg
// index.html:13 Macao  https://restcountries.eu/data/mac.svg
// index.html:13 Macedonia (the former Yugoslav Republic of) Skopje https://restcountries.eu/data/mkd.svg
// index.html:13 Madagascar Antananarivo https://restcountries.eu/data/mdg.svg
// index.html:13 Malawi Lilongwe https://restcountries.eu/data/mwi.svg
// index.html:13 Malaysia Kuala Lumpur https://restcountries.eu/data/mys.svg
// index.html:13 Maldives Malé https://restcountries.eu/data/mdv.svg
// index.html:13 Mali Bamako https://restcountries.eu/data/mli.svg
// index.html:13 Malta Valletta https://restcountries.eu/data/mlt.svg
// index.html:13 Marshall Islands Majuro https://restcountries.eu/data/mhl.svg
// index.html:13 Martinique Fort-de-France https://restcountries.eu/data/mtq.svg
// index.html:13 Mauritania Nouakchott https://restcountries.eu/data/mrt.svg
// index.html:13 Mauritius Port Louis https://restcountries.eu/data/mus.svg
// index.html:13 Mayotte Mamoudzou https://restcountries.eu/data/myt.svg
// index.html:13 Mexico Mexico City https://restcountries.eu/data/mex.svg
// index.html:13 Micronesia (Federated States of) Palikir https://restcountries.eu/data/fsm.svg
// index.html:13 Moldova (Republic of) Chișinău https://restcountries.eu/data/mda.svg
// index.html:13 Monaco Monaco https://restcountries.eu/data/mco.svg
// index.html:13 Mongolia Ulan Bator https://restcountries.eu/data/mng.svg
// index.html:13 Montenegro Podgorica https://restcountries.eu/data/mne.svg
// index.html:13 Montserrat Plymouth https://restcountries.eu/data/msr.svg
// index.html:13 Morocco Rabat https://restcountries.eu/data/mar.svg
// index.html:13 Mozambique Maputo https://restcountries.eu/data/moz.svg
// index.html:13 Myanmar Naypyidaw https://restcountries.eu/data/mmr.svg
// index.html:13 Namibia Windhoek https://restcountries.eu/data/nam.svg
// index.html:13 Nauru Yaren https://restcountries.eu/data/nru.svg
// index.html:13 Nepal Kathmandu https://restcountries.eu/data/npl.svg
// index.html:13 Netherlands Amsterdam https://restcountries.eu/data/nld.svg
// index.html:13 New Caledonia Nouméa https://restcountries.eu/data/ncl.svg
// index.html:13 New Zealand Wellington https://restcountries.eu/data/nzl.svg
// index.html:13 Nicaragua Managua https://restcountries.eu/data/nic.svg
// index.html:13 Niger Niamey https://restcountries.eu/data/ner.svg
// index.html:13 Nigeria Abuja https://restcountries.eu/data/nga.svg
// index.html:13 Niue Alofi https://restcountries.eu/data/niu.svg
// index.html:13 Norfolk Island Kingston https://restcountries.eu/data/nfk.svg
// index.html:13 Korea (Democratic People's Republic of) Pyongyang https://restcountries.eu/data/prk.svg
// index.html:13 Northern Mariana Islands Saipan https://restcountries.eu/data/mnp.svg
// index.html:13 Norway Oslo https://restcountries.eu/data/nor.svg
// index.html:13 Oman Muscat https://restcountries.eu/data/omn.svg
// index.html:13 Pakistan Islamabad https://restcountries.eu/data/pak.svg
// index.html:13 Palau Ngerulmud https://restcountries.eu/data/plw.svg
// index.html:13 Palestine, State of Ramallah https://restcountries.eu/data/pse.svg
// index.html:13 Panama Panama City https://restcountries.eu/data/pan.svg
// index.html:13 Papua New Guinea Port Moresby https://restcountries.eu/data/png.svg
// index.html:13 Paraguay Asunción https://restcountries.eu/data/pry.svg
// index.html:13 Peru Lima https://restcountries.eu/data/per.svg
// index.html:13 Philippines Manila https://restcountries.eu/data/phl.svg
// index.html:13 Pitcairn Adamstown https://restcountries.eu/data/pcn.svg
// index.html:13 Poland Warsaw https://restcountries.eu/data/pol.svg
// index.html:13 Portugal Lisbon https://restcountries.eu/data/prt.svg
// index.html:13 Puerto Rico San Juan https://restcountries.eu/data/pri.svg
// index.html:13 Qatar Doha https://restcountries.eu/data/qat.svg
// index.html:13 Republic of Kosovo Pristina https://restcountries.eu/data/kos.svg
// index.html:13 Réunion Saint-Denis https://restcountries.eu/data/reu.svg
// index.html:13 Romania Bucharest https://restcountries.eu/data/rou.svg
// index.html:13 Russian Federation Moscow https://restcountries.eu/data/rus.svg
// index.html:13 Rwanda Kigali https://restcountries.eu/data/rwa.svg
// index.html:13 Saint Barthélemy Gustavia https://restcountries.eu/data/blm.svg
// index.html:13 Saint Helena, Ascension and Tristan da Cunha Jamestown https://restcountries.eu/data/shn.svg
// index.html:13 Saint Kitts and Nevis Basseterre https://restcountries.eu/data/kna.svg
// index.html:13 Saint Lucia Castries https://restcountries.eu/data/lca.svg
// index.html:13 Saint Martin (French part) Marigot https://restcountries.eu/data/maf.svg
// index.html:13 Saint Pierre and Miquelon Saint-Pierre https://restcountries.eu/data/spm.svg
// index.html:13 Saint Vincent and the Grenadines Kingstown https://restcountries.eu/data/vct.svg
// index.html:13 Samoa Apia https://restcountries.eu/data/wsm.svg
// index.html:13 San Marino City of San Marino https://restcountries.eu/data/smr.svg
// index.html:13 Sao Tome and Principe São Tomé https://restcountries.eu/data/stp.svg
// index.html:13 Saudi Arabia Riyadh https://restcountries.eu/data/sau.svg
// index.html:13 Senegal Dakar https://restcountries.eu/data/sen.svg
// index.html:13 Serbia Belgrade https://restcountries.eu/data/srb.svg
// index.html:13 Seychelles Victoria https://restcountries.eu/data/syc.svg
// index.html:13 Sierra Leone Freetown https://restcountries.eu/data/sle.svg
// index.html:13 Singapore Singapore https://restcountries.eu/data/sgp.svg
// index.html:13 Sint Maarten (Dutch part) Philipsburg https://restcountries.eu/data/sxm.svg
// index.html:13 Slovakia Bratislava https://restcountries.eu/data/svk.svg
// index.html:13 Slovenia Ljubljana https://restcountries.eu/data/svn.svg
// index.html:13 Solomon Islands Honiara https://restcountries.eu/data/slb.svg
// index.html:13 Somalia Mogadishu https://restcountries.eu/data/som.svg
// index.html:13 South Africa Pretoria https://restcountries.eu/data/zaf.svg
// index.html:13 South Georgia and the South Sandwich Islands King Edward Point https://restcountries.eu/data/sgs.svg
// index.html:13 Korea (Republic of) Seoul https://restcountries.eu/data/kor.svg
// index.html:13 South Sudan Juba https://restcountries.eu/data/ssd.svg
// index.html:13 Spain Madrid https://restcountries.eu/data/esp.svg
// index.html:13 Sri Lanka Colombo https://restcountries.eu/data/lka.svg
// index.html:13 Sudan Khartoum https://restcountries.eu/data/sdn.svg
// index.html:13 Suriname Paramaribo https://restcountries.eu/data/sur.svg
// index.html:13 Svalbard and Jan Mayen Longyearbyen https://restcountries.eu/data/sjm.svg
// index.html:13 Swaziland Lobamba https://restcountries.eu/data/swz.svg
// index.html:13 Sweden Stockholm https://restcountries.eu/data/swe.svg
// index.html:13 Switzerland Bern https://restcountries.eu/data/che.svg
// index.html:13 Syrian Arab Republic Damascus https://restcountries.eu/data/syr.svg
// index.html:13 Taiwan Taipei https://restcountries.eu/data/twn.svg
// index.html:13 Tajikistan Dushanbe https://restcountries.eu/data/tjk.svg
// index.html:13 Tanzania, United Republic of Dodoma https://restcountries.eu/data/tza.svg
// index.html:13 Thailand Bangkok https://restcountries.eu/data/tha.svg
// index.html:13 Timor-Leste Dili https://restcountries.eu/data/tls.svg
// index.html:13 Togo Lomé https://restcountries.eu/data/tgo.svg
// index.html:13 Tokelau Fakaofo https://restcountries.eu/data/tkl.svg
// index.html:13 Tonga Nuku'alofa https://restcountries.eu/data/ton.svg
// index.html:13 Trinidad and Tobago Port of Spain https://restcountries.eu/data/tto.svg
// index.html:13 Tunisia Tunis https://restcountries.eu/data/tun.svg
// index.html:13 Turkey Ankara https://restcountries.eu/data/tur.svg
// index.html:13 Turkmenistan Ashgabat https://restcountries.eu/data/tkm.svg
// index.html:13 Turks and Caicos Islands Cockburn Town https://restcountries.eu/data/tca.svg
// index.html:13 Tuvalu Funafuti https://restcountries.eu/data/tuv.svg
// index.html:13 Uganda Kampala https://restcountries.eu/data/uga.svg
// index.html:13 Ukraine Kiev https://restcountries.eu/data/ukr.svg
// index.html:13 United Arab Emirates Abu Dhabi https://restcountries.eu/data/are.svg
// index.html:13 United Kingdom of Great Britain and Northern Ireland London https://restcountries.eu/data/gbr.svg
// index.html:13 United States of America Washington, D.C. https://restcountries.eu/data/usa.svg
// index.html:13 Uruguay Montevideo https://restcountries.eu/data/ury.svg
// index.html:13 Uzbekistan Tashkent https://restcountries.eu/data/uzb.svg
// index.html:13 Vanuatu Port Vila https://restcountries.eu/data/vut.svg
// index.html:13 Venezuela (Bolivarian Republic of) Caracas https://restcountries.eu/data/ven.svg
// index.html:13 Viet Nam Hanoi https://restcountries.eu/data/vnm.svg
// index.html:13 Wallis and Futuna Mata-Utu https://restcountries.eu/data/wlf.svg
// index.html:13 Western Sahara El Aaiún https://restcountries.eu/data/esh.svg
// index.html:13 Yemen Sana'a https://restcountries.eu/data/yem.svg
// index.html:13 Zambia Lusaka https://restcountries.eu/data/zmb.svg
// index.html:13 Zimbabwe Harare https://restcountries.eu/data/zwe.svg --> -->

D.Print the total population of countries using reduce function
  <!DOCTYPE html>
<html>
    <head>rest countries</head>
    <p>countries from asia</p>
    <body>
        <script>
            var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','true');

request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}
        </script>
    </body>
</html>
//output:7349137231
E.Print the country which uses US Dollars as currency.
<!DOCTYPE html>
<html>
    <head>rest countries</head>
    <p>countries from asia</p>
    <body>
        <script>
            var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','true');
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
}
        </script>
    </body>
</html>
//otuput:
// name: American Samoa ==> USD
//  name: Bonaire, Sint Eustatius and Saba ==> USD
//  name: British Indian Ocean Territory ==> USD
//  name: United States Minor Outlying Islands ==> USD
//  name: Virgin Islands (U.S.) ==> USD
//  name: Ecuador ==> USD
//  name: El Salvador ==> USD
//  name: Guam ==> USD
//  name: Marshall Islands ==> USD
//  name: Northern Mariana Islands ==> USD
//  name: Puerto Rico ==> USD
//  name: Timor-Leste ==> USD
// name: Turks and Caicos Islands ==> USD
// name: United States of America ==> USD
 





