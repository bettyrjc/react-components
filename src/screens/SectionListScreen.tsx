/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SectionList, View} from 'react-native';
import {styles} from '../themes/appThemes';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Kenshin',
      'Goku',
      'Kenshin',
      'Goku',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];
const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de casa:' + casas.length} />
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={'Total:' + section.data.length} />
          </View>
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
