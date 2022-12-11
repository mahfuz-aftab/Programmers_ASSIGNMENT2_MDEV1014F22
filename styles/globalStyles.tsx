import { Dimensions, StyleSheet } from 'react-native';

const colorBackgroundPrimary = '#A7C7E7'
const colorBlack = '#000000'

export const globalStyles = StyleSheet.create({

    // Wrappers
    wrapper: {
        backgroundColor: colorBackgroundPrimary,
        height: '100%',
        padding: 10,
    },
    wrapperGuest: {
        backgroundColor: colorBackgroundPrimary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Headings
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
    },

    // Header
    header: {
        backgroundColor: '#7393B3',
        paddingTop: '5%', // Platform.OS == 'android' ? 30 : 20,
    },
    headerText: {
        color: colorBlack,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },

    // Auth
    titleLogin: {
        fontSize: 30,
        color: colorBlack,
    },
    formLabel: {
        fontSize: 20,
        color: colorBlack,
    },
    formInput: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#DCDCDC',
        fontSize: 18
    },
    buttonLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 4,
        backgroundColor: '#0047AB',
    },

    buttonLogoutText: {
        color: '#fff',
        fontWeight: '700',
    },

    buttonSignup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 4,
        backgroundColor: '#088F8F',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    buttonTextLink: {
        textDecorationLine: 'underline'
    },

    // Content Boxes
    boxStyle: {
        width: "100%",
        paddingStart: "10%",
        paddingEnd: "10%",
        marginBottom: 15,
    },
    homeBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7393B3',
        borderRadius: 12
    },
    homeBoxText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 24
    },

    // News (List + Single)
    articleBox: {
        flex: 1,
        backgroundColor: '#5F9EA0',
        padding: 24,
        borderRadius: 12,
    },
    articleTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: '5%',
        marginHorizontal: '5%',
    },
    articleText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 26.4,
        padding: '5%'
    },

    // News (Single)
    articleSingleImage: {
        width: "100%",
        height: 240,
    },
    articleSingleBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7393B3',
        borderRadius: 0
    },

    // Channels
    wrapperChannels: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    channelContainer: {
        flexBasis: '45%',
        marginTop: '3.5%',
        backgroundColor: '#ededed',
        height: Dimensions.get('window').width / 2.25,
        borderRadius: 10
    },
    channelLogo: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }

});
