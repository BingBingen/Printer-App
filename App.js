import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ImageBackground, 
  SectionList, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';

// ===== Your sections data =====
const sections = [
  {
    title: 'Olin Library',
    data: [
      {id: '2', location: 'First floor Reserve Study', floor: 'Floor 1'},
      {id: '3', location: 'Interlibrary Loan Office room 112', floor: 'Floor 1'},
      {id: '4', location: 'Left side', floor: 'Floor 1'},
      {id: '5', location: 'Middle', floor: 'Floor 1'},
      {id: '6', location: 'Right side', floor: 'Floor 1'},
      {id: '9', location: 'Tech Services', floor: 'Floor 1'},
      {id: '1', location: 'Art Library room 204', floor: 'Floor 2'},
      {id: '7', location: 'Room 302b', floor: 'Floor 3'},
      {id: '8', location: 'Room 327 entrance', floor: 'Floor 3'}
    ], 
  },

  {
    title: 'Exley Science Center',
    data: [
      {id: '10', location: 'N/A', floor: 'Floor 1' },
      {id: '11', location: 'N/A', floor: 'Floor 1' },
      {id: '12', location: 'Exley Lobby', floor: 'Floor 1' },
      {id: '13', location: 'Science Library', floor: 'Floor 1' },
      {id: '49', location: 'Graduate Studies office', floor: 'Floor 1'},
      {id: '50', location: 'ITS Service Center Rm 116', floor: 'Floor 1'},
      {id: '52', location: 'Physics department, RM 204', floor: 'Floor 2'},
      {id: '53', location: 'Archaeology department, 301', floor: 'Floor 3'},
      {id: '54', location: 'E&ES department, RM 455', floor: 'Floor 4'},
      {id: '55', location: 'RM 504', floor: 'Floor 5'},
      {id: '51', location: 'Math department', floor: 'Floor 6'},
    ],
  },

  {
    title: 'PAC',
    data: [
      {id: '39', location: 'RM 116 Government', floor: 'Floor 1'},
      {id: '40', location: 'RM 122 Sociology', floor: 'Floor 1'},
      {id: '41', location: 'RM123 Economics', floor: 'Floor 1'},
      {id: '42', location: 'Outside room 303', floor: 'Floor 3'},
    ],
  },

  {
    title: 'Usdan',
    data: [
      {id: '14', location: 'Basement hallway', floor: 'Basement'},
      {id: '91', location: 'Bon Appetit Basement', floor: 'Basement'},
      {id: '92', location: 'Room 104', floor: 'Floor 1'},
      {id: '93', location: 'Room 120', floor: 'Floor 1'},
      {id: '94', location: 'WesStation', floor: 'Floor 1'},
    ],
  },

  {
    title: 'Allbritton',
    data: [
      {id: '29', location: 'N/A', floor: 'Floor 1'},
      {id: '30', location: 'Room 104', floor: 'Floor 1'},
      {id: '31', location: 'N/A', floor: 'Floor 2'},
      {id: '32', location: 'Room 318', floor: 'Floor 3'},
    ]
  },
  {
    title: 'Boger Hall',
    data: [
      {id: '87', location: 'Career Center first floor', floor: 'Floor 1'},
      {id: '86', location: 'Career Center 3rd FL', floor: 'Floor 3'},
      {id: '88', location: 'Room 318 ARHA COL Admin Office', floor: 'Floor 3'},
      {id: '89', location: 'N/A', floor: 'Floor 3'},
      {id: '90', location: 'N/A', floor: 'Floor 3'},
    ]
  },
  {
    title: 'Cady Building',
    data: [
      {id: '19', location: 'N/A', floor: 'Floor 1'},
      {id: '20', location: 'Basement', floor: 'Basement'},
      {id: '21', location: 'N/A', floor: 'Floor 1'},
      {id: '22', location: 'Main Office', floor: 'Floor 1'},
    ]
  },
  {
    title: 'Fisk Hall',
    data: [
      {id: '43', location: 'Asian Studies', floor: 'Floor 1'},
      {id: '44', location: 'N/A', floor: 'Floor 1'},
      {id: '45', location: 'German department', floor: 'Floor 1'},
      {id: '46', location: 'Room 102', floor: 'Floor 1'},
      {id: '47', location: 'Room 201', floor: 'Floor 2'},
      {id: '48', location: 'Russian department', floor: 'Floor 1'},
    ]
  },
  {
    title: 'Hall-Atwater',
    data: [
      {id: '15', location: 'Room 165A', floor: 'Floor 1'},
      {id: '95', location: 'Biology RM 242', floor: 'Floor 2'},
      {id: '96', location: 'Biology Room 257', floor: 'Floor 2'},
      {id: '97', location: 'Chemistry Room 52', floor: 'Floor 1'},
      {id: '98', location: 'Chemistry Room 8', floor: 'Floor 1'},
      {id: '99', location: 'Molecular Biology & Biochemistry', floor: 'Floor 2'},
    ]
  },
  {
    title: 'Judd Hall',
    data: [
      {id: '24', location: 'Room 107', floor: 'Floor 1'},
      {id: '25', location: 'Room 202', floor: 'Floor 2'},
      {id: '26', location: 'Room 403', floor: 'Floor 4'},
    ]
  },
  {
    title: 'North College',
    data: [
      {id: '34', location: 'INVESTMENTS OFFICE', floor: 'Floor 4'},
      {id: '35', location: 'Room 4238 Human Resources', floor: 'Floor 4'},
      {id: '36', location: 'Room 108', floor: 'Floor 1'},
      {id: '37', location: 'Room 303', floor: 'Floor 3'},
      {id: '38', location: 'Room 308', floor: 'Floor 3'},
    ]
  },
  {
    title: 'Admissions',
    data: [
      {id: '100', location: 'N/A', floor: 'Floor 1'},
      {id: '101', location: 'N/A', floor: 'Floor 1'},
      {id: '102', location: 'N/A', floor: 'Floor 2'},
      {id: '103', location: 'Basement', floor: 'Basement'},
    ]
  },

    {
    title: 'Center for Humanities',
    data: [
      {id: '105', building: 'Center for Humanities', location: 'Room 102', floor: 'Floor 1'},
      {id: '106', building: 'Center for Humanities', location: 'Room 202', floor: 'Floor 2'},
    ]
  },
  {
    title: 'English Dept.',
    data: [
      {id: '57', building: 'English Dept.', location: 'Room 102', floor: 'Floor 1'},
      {id: '58', building: 'English Dept.', location: 'N/A', floor: 'Floor 2'},
    ]
  },
  {
    title: 'Art Workshops',
    data: [
      {id: '60', building: 'Art Workshops', location: 'Room 111', floor: 'Floor 1'},
      {id: '61', building: 'Art Workshops', location: 'Room 112', floor: 'Floor 1'},
    ]
  },
  {
    title: 'Others',
    data: [
      {id: '16', building: 'Writing Center', location: 'Room 110', floor: 'Floor 1'},
      {id: '17', building: 'Dance Studio Offices', location: 'N/A', floor: 'Floor 1'},
      {id: '18', building: 'Freeman Athletic Center', location: 'Room 161', floor: 'Floor 1'},
      {id: '23', building: 'Religion Department', location: 'RM101', floor: 'Floor 1'},
      {id: '27', building: 'Public Safety', location: 'N/A', floor: 'Floor 1'},
      {id: '28', building: 'Wesleyan Press', location: 'N/A', floor: 'Floor 1'},
      {id: '33', building: 'South College', location: "President's Office", floor: 'Floor 1'},
      {id: '56', building: 'College of the Environment', location: 'Room 104', floor: 'Floor 1'},
      {id: '59', building: 'Artworkshop', location: 'RM 109', floor: 'Floor 1'},
      {id: '62', building: 'SHAPE', location: 'N/A', floor: 'Floor 1'},
      {id: '63', building: 'Advancement', location: 'Copy Closet room 132', floor: 'Floor 1'},
      {id: '64', building: 'Advancement', location: 'Room 113 Copy Room', floor: 'Floor 1'},
      {id: '65', building: 'Advancement', location: 'Room 213', floor: 'Floor 2'},
      {id: '66', building: 'Finance and Administration', location: 'N/A', floor: 'Floor 3'},
      {id: '67', building: '291 MAIN ST', location: 'Copy room', floor: 'Floor 2'},
      {id: '68', building: 'Downey House', location: 'Room 106', floor: 'Floor 1'},
      {id: '69', building: 'Downey House', location: 'Room 114', floor: 'Floor 1'},
      {id: '70', building: 'Downey House', location: 'Room 204', floor: 'Floor 2'},
      {id: '71', building: 'Music Studios', location: 'Lobby', floor: 'Floor 1'},
      {id: '72', building: 'Music Studios', location: 'Room 108', floor: 'Floor 1'},
      {id: '73', building: 'Romance Languages', location: 'Room 104', floor: 'Floor 1'},
      {id: '74', building: 'Davison Art Center', location: 'Art Library', floor: 'Floor 1'},
      {id: '75', building: 'Film Studies', location: 'AV WORKROOM 191', floor: 'Floor 1'},
      {id: '76', building: 'Film Studies', location: 'room 172', floor: 'Floor 1'},
      {id: '77', building: 'Film Studies', location: 'Room 172', floor: 'Floor 1'},
      {id: '78', building: 'HISTORY', location: 'Room 207', floor: 'Floor 2'},
      {id: '79', building: 'Davison Health Center', location: 'Room 122', floor: 'Floor 1'},
      {id: '80', building: 'Davison Health Center', location: 'Room 126', floor: 'Floor 1'},
      {id: '81', building: 'SOCIAL STUDIES', location: 'CSS Office', floor: 'Floor 4'},
      {id: '82', building: 'African American Studies', location: 'Room 134 Main Office', floor: 'Floor 1'},
      {id: '83', building: 'East Asian Studies', location: 'N/A', floor: 'Floor 1'},
      {id: '84', building: 'Russell House', location: 'N/A', floor: 'Floor 1'},
      {id: '85', building: 'Philosophy', location: 'N/A', floor: 'Floor 2'},
      {id: '100', building: 'Admissions', location: 'N/A', floor: 'Floor 1'},
      {id: '101', building: 'Admissions', location: 'N/A', floor: 'Floor 1'},
    ]
  },
];

export default function App() {
  const sectionListRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  // Filter sections dynamically
  const filteredSections = sections
    .map(section => ({
      title: section.title,
      data: section.data.filter(item =>
        item.location.toLowerCase().includes(searchText.toLowerCase()) ||
        item.floor.toLowerCase().includes(searchText.toLowerCase())
      ),
    }))
    .filter(section => section.data.length > 0); // Remove empty sections

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.location}</Text>
      <Text style={styles.text}>{item.floor}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/app_wp.jpg')}
        style={StyleSheet.absoluteFill}
        imageStyle={{ resizeMode: 'cover' }}
      />

      {/* Safe area content */}
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
        <View style={[styles.container, { flex: 1 }]}>
          
          {/* Header */}
          <Text style={[styles.header, { color: 'red' }]}>Wesleyan</Text>
          <Text style={[styles.header, { color: 'black' }]}>Printers!</Text>

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search printers..."
            value={searchText}
            onChangeText={setSearchText}
          />

          {/* Table of Contents */}
          <View style={styles.tocBox}>
            {sections.map((section, index) => (
              <TouchableOpacity
                key={section.title}
                style={{ width: '45%', paddingVertical: 5 }}
                onPress={() =>
                  sectionListRef.current?.scrollToLocation({
                    sectionIndex: index,
                    itemIndex: 0,
                    animated: true,
                    viewPosition: 0, // aligns header at top
                  })
                }
              >
                <Text style={styles.tocText}>{section.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Section List */}
          <SectionList
            ref={sectionListRef}
            sections={filteredSections}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            stickySectionHeadersEnabled={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

// ===== Styles =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Courier'
  },

  searchBar: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },

  tocBox: {
    backgroundColor: '#fae3bfff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  tocText: {
    fontSize: 15,
    color: '#333',
  },

  item: {
    paddingVertical: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    backgroundColor:'#e4cacaff',
    borderWidth: 2,
    borderColor: '#000000ff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: 15,
  },

  sectionHeader: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 10 
  },
});




