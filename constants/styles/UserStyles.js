import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  containerHead: {
    backgroundColor: '#2069b2',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  viewHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 25
  },
  viewAvatar: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 15
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 5
  },
  name: {
    color: 'white',
    fontSize: 22,
    marginTop: 10
  },
  type: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic'
  },
  containterBody: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "white",
  },
  containerComp: {
    marginBottom: 10,
    backgroundColor: '#adccea',
    flexDirection: 'row'
  },
  component: {
    paddingHorizontal: 15,
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    flexDirection: "row",
  },
  key: {
    fontSize: 15,
    textTransform:"uppercase",
  }
});

export default styles;
