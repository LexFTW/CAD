import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  containerHead: {
    backgroundColor: '#2069b2',
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 325
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
    alignItems: "center", flex: 1,
    justifyContent: "center",
    marginVertical: 15
  },
  containerComp: {
    borderColor: '#0069d9',
    borderWidth: 2,
    marginBottom: 10,
    backgroundColor: '#adccea'
  },
  component: {
    paddingHorizontal: 15,
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    flexDirection: "row"
  },
  key: {
    fontSize: 15,
    textTransform:"uppercase"
  }
});

export default styles;
