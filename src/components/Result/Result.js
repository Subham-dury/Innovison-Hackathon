import React from "react";
import Individual from "../Individual/Individual";
import "./result.css";

const results = [
  {
    id: 1,
    text:' AMRI Hospital, Dhakuria (Private Hospital (Self Run))',
    address: 'Block-A, Scheme-L11 P-4&5, Gariahat Rd, Dhakuria, Kolkata, West Bengal 700029 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 3
  },
  {
    id: 2,
    text:'AMRI Hospital, Mukundupur (Private Hospital (Self Run))',
    address: '230 Barakhola Lane, behind Metro Cash n Carry, Purba Jadavpur, Mukundapur, Kolkata, West Bengal 700099 , KOLKATA METROPOLITAN AREA',
    beds: 7,
    doctors: 1
  },
  {
    id: 3,
    text:'AMRI, Salt Lake (Private Hospital (Self Run))',
    address: '6 17, JC Block Lane, Central Park Road Broadway Road, stadium gate number 3, opposite salt lake, Sector III, Bidhannagar, Kolkata, West Bengal 700098 , KOLKATA METROPOLITAN AREA',
    beds: 6,
    doctors: 4
  },
  {
    id: 4,
    text:'AMRI, Salt Lake - Hotel Monotel (Satellite Hotel)',
    address: '2, DM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091 , KOLKATA METROPOLITAN AREA',
    beds: 2,
    doctors: 0
  },
  {
    id: 5,
    text:'Anandalok Hospital (Private Hospital (Self Run))',
    address: 'DK-7/3, 3rd Ave, beside National Dairy Development Board, Sector II, Bidhannagar, Kolkata, West Bengal 700091 , KOLKATA METROPOLITAN AREA',
    beds: 0,
    doctors: 0
  },
  {
    id: 6,
    text:'Apex Clinic Private Limited (Private Hospital (Self Run))',
    address: '844/A, Raja Rammohan Roy Rd, Manton, Behala, Kolkata, West Bengal 700008 , KOLKATA METROPOLITAN AREA',
    beds: 2,
    doctors: 0
  },
  {
    id: 7,
    text:'Apex Institute of Medical Sciences (Private Hospital (Self Run))',
    address: '1219, PG Survey Park Road, Sammilani Park Rd, near Big Bazar, Hiland Park, Survey Park, Santoshpur, Kolkata, West Bengal 700075 , KOLKATA METROPOLITAN AREA',
    beds: 10,
    doctors: 2
  },
  {
    id: 8,
    text:'Apollo Gleneagles Hospital (Private Hospital (Self Run))',
    address: '58, Canal Circular Rd, Kadapara, Kankurgachi, Kolkata, West Bengal 700054 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 3
  },
  {
    id: 9,
    text:'Apollo Gleneagles Hospital - VISITEL - A Boutique Hotel (Satellite Hotel)',
    address: '78, Canel Circular Road, Beside Apollo Hospital On EM, Bypass, Kolkata, West Bengal 700054 , KOLKATA METROPOLITAN AREA',
    beds: 10,
    doctors: 2
  },
  {
    id: 10,
    text:'Ashok Nursing Home (Private Hospital (Self Run))',
    address: '422, Raja Subodh Chandra Mallick Rd, Selimpur, Jodhpur Park, Kolkata, West Bengal 700068 , KOLKATA METROPOLITAN AREA',
    beds: 2,
    doctors: 0
  },
  {
    id: 11,
    text:'B. P. PODDAR HOSPITAL MEDICAL RESEARCH LTD. (Private Hospital (Self Run))',
    address: '71/1, Humayun Kabir Sarani, Block G, New Alipore, Kolkata, West Bengal 700053 , KOLKATA METROPOLITAN AREA',
    beds: 12,
    doctors: 5
  },
  {
    id: 12,
    text:'B. P. PODDAR HOSPITAL MEDICAL RESEARCH LTD. - B.P.Poddar and Parvati Devi Institute of Medical Sciences and Managements (Satellite Pvt. Building)',
    address: '45A, Manujendra Dutta Road, Gorabazar, Kolkata-700028 , KOLKATA METROPOLITAN AREA',
    beds: 5,
    doctors: 0
  },
  {
    id: 13,
    text:'Baine Hospital (Private Hospital (Self Run))',
    address: '123, 1, Gopal Lal Tagore Rd, Bonhooghly Government Colony, Baranagar, Kolkata, West , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 0
  },
  {
    id: 14,
    text:'Baksi Orthopaedics Trauma and Rehabilitation Centre Pvt Ltd (Private Hospital (Self Run))',
    address: '95, HEM CHANDRA NASKAR ROAD, Beliaghata Kol- 700010 , KOLKATA METROPOLITAN AREA',
    beds: 7,
    doctors: 1
  },
  {
    id: 15,
    text:'Belle Vue Clinic (Private Hospital (Self Run))',
    address: '9, Dr. U. N. Brahmachari Street (Formerly Loudon Street), Elgin, Kolkata, West Bengal 700017 , KOLKATA METROPOLITAN AREA',
    beds: 20,
    doctors: 3
  },
  {
    id: 16,
    text:'Belle Vue Clinic - Hotel Orion West Willows (Satellite Hotel)',
    address: '2, W Range, near Tata Motor lexus Showroom, Beck Bagan, Elgin, Kolkata, West Bengal 700017 , KOLKATA METROPOLITAN AREA',
    beds: 5,
    doctors: 0
  },        
  {
    id: 17,
    text:'Bhagirathi Neotia Woman and Child Care Centre (Private Hospital (Self Run))',
    address: 'Premises No. 27-0327, Street no.327, Action Area 1D, Newtown, Kolkata 700156 , KOLKATA METROPOLITAN AREA',
    beds: 8,
    doctors: 1
  },
  {
    id: 18,
    text:'BM Birla Heart Research Centre CK Birla Hospitals (Private Hospital (Self Run))',
    address: '1, 1, National Library Ave, Alipore, Kolkata, West Bengal 700027 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 2
  },
  {
    id: 19,
    text:'BMRC HOSPITALS (Private Hospital (Self Run))',
    address: '6/6, Barrackpore Trunk Rd, Talpukur, Titagarh, Barrackpore, West Bengal 700120 , KOLKATA METROPOLITAN AREA',
    beds: 5,
    doctors: 0
  },
  {
    id: 20,
    text:'Calcutta Heart Clinic, Salt Lake (Private Hospital (Self Run))',
    address: ' 3, 1st Cross Rd, HC Block, Sector III, Bidhannagar, Kolkata, West Bengal 700106 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 0
  },
  {
    id: 21,
    text:'Charnock Hospital (Private Hospital (Self Run))',
    address: 'BMC 195, Biswa Bangla Sarani, Tegharia, Newtown, Kolkata, West Bengal 700157 , KOLKATA METROPOLITAN AREA',
    beds: 9,
    doctors: 2
  },
  {
    id: 22,
    text:'Charring Cross Nursing Home (Private Hospital (Self Run))',
    address: '2c, Motilal Basak Lane, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 2
  },
  {
    id: 23,
    text:'Columbia Asia Hospital, Salt Lake (Private Hospital (Self Run))',
    address: 'IB-193, IB Block, Sector III, Bidhannagar, Kolkata, West Bengal 700091 , KOLKATA METROPOLITAN AREA',
    beds: 6,
    doctors: 1
  },
  {
    id: 24,
    text:'DESUN Hospital - OYO SilverKey Hotel Mayfair Tower (Satellite Hotel)',
    address: '194, Hossenpur, EM Bypass (Chowbaga Road, Anandapur High Rd, Madurdaha, Hussainpur, Kolkata, West Bengal 700107 , KOLKATA METROPOLITAN AREA',
    beds: 5,
    doctors: 0
  },
  {
    id: 25,
    text:'DESUN Hospital Private (Private Hospital (Self Run))',
    address: 'Desun More, , Eastern Metropolitan Bypass, Golpark, Sector I, Kasba, Kolkata, West Bengal , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 3
  },
  {
    id: 26,
    text:'Fortis Hospital Anandapur - OYO Guestopolis (Satellite Pvt. Building)',
    address: ' 277, Rajdanga Main Rd, Sarat Park, Bosepukur Purbapara, Sector E, East Kolkata Twp, Kolkata, West Bengal 700107 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 0
  },
  {
    id: 27,
    text:'Institute of Neurosciences (Private Hospital (Self Run))',
    address: '185, Acharya Jagadish Chandra Bose Rd, Elgin, Kolkata, West Bengal 700017 , KOLKATA METROPOLITAN AREA',
    beds: 8,
    doctors: 1
  },
  {
    id: 28,
    text:'Fortis Kidney Institute (Private Hospital (Self Run))',
    address: '111A, Rash Behari Ave, Dover Terrace, Gariahat, Kolkata, West Bengal 700029 , KOLKATA METROPOLITAN AREA',
    beds: 4,
    doctors: 1
  },
  {
    id: 29,
    text:'Narayan Memorial Hospital, Behala (Private Hospital (Self Run))',
    address: 'Narayan Memorial Hospital, 601, Diamond Harbour Rd, Shimultala, Manton, Behala, Kolkata, West Bengal 700034 , KOLKATA METROPOLITAN AREA',
    beds: 12,
    doctors: 3
  },
  {
    id: 30,
    text:'Nightingale Hospital (Private Hospital (Self Run))',
    address: '11 Shakespeare Sarani Kolkata-71 , KOLKATA METROPOLITAN AREA',
    beds: 17,
    doctors: 2
  },
  {
    id: 31,
    text:'Park Medical Research Welfare Society (Private Hospital (Self Run))',
    address: '4, Victoria Terrace, Park Circus, Ballygunge, Kolkata, West Bengal 700016 , KOLKATA METROPOLITAN AREA',
    beds: 15,
    doctors: 3
  },
  {
    id: 32,
    text:'Peerless Hospital (Private Hospital (Self Run))',
    address: '360, Pancha Sayar Rd, Sahid Smirity Colony, Pancha Sayar, Kolkata, West Bengal 700094 , KOLKATA METROPOLITAN AREA',
    beds: 5,
    doctors: 0
  },
  {
    id: 33,
    text:'Rabindranath Tagore International Institute of Cardiac Sciences (Private Hospital (Self Run))',
    address: 'No: 1489, Mukundapur Main Road, 124, Eastern Metropolitan Bypass, Mukundapur, Kolkata, West Bengal 700099 , KOLKATA METROPOLITAN AREA',
    beds: 9,
    doctors: 3
  }

]


const Results = ({ flag }) => {

  

  return (
    <div className={!flag ? "res-container": "rescontainer"}>
      {results.map((result) => (
        <Individual key={result.id} result={result}/>
      ))}
    </div>
  )
}

export default Results