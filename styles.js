import StyleSheet from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  headerContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
    backgroundColor: 'black',
  },
  header: {
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 45,
    paddingTop: 32,
    top: 10
  },
  center: {
    height: '30%',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  mainImg: {
    width: 700,
    height: 300,
    position: 'relative',
    bottom: 25,
    shadowOpacity: 1,
    shadowRadius: 23,
  },
  mainMenuContainer: {
    height: '58%',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 15,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderRadius: 40,
  },
  button: {
    fontFamily: 'press-start-2p',
    color: 'black',
    textAlign: 'center',
    padding: 12,
  },
});
