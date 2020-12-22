import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default class Profile extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="white" hidden={false} backgroundColor="#242a37" translucent={true} />
                {/* >>>>>>>>>>>>>>>>> Body <<<<<<<<<<<<<<<<<<< */}
                <View style={styles.body_main}>
                    {/* ==================< >====================== */}
                    <View style={styles._icons_main}>
                        <TouchableOpacity>
                            <MaterialIcons name="settings" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="search" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* ==================< >====================== */}
                    <View style={styles._profile_main}>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/profilemain.png')} style={styles.profile_img} />
                        </TouchableOpacity>
                        <Text style={styles._user_name}>Stella Malone</Text>
                        <Text style={styles._user_heading}>LID</Text>
                        <Text style={styles._user_des}>Lorum ipsum dolar amet, Lorum ipsum dolar amet, Lorum ipsum dolar amet.</Text>
                    </View>

                    {/* ==================< >====================== */}
                    <View style={styles._user_status_main}>
                        <View>
                            <Text style={styles._likes}>LIKES</Text>
                            <Text style={styles._likes_counter}>2318</Text>
                        </View>
                        <View>
                            <Text style={styles._likes}>FOLLOWING</Text>
                            <Text style={styles._likes_counter}>364</Text>
                        </View>
                        <View>
                            <Text style={styles._likes}>FOLLOWER</Text>
                            <Text style={styles._likes_counter}>175</Text>
                        </View>
                    </View>

                    {/* ==================< >====================== */}
                    <ScrollView>
                        <View style={styles._gallery_main}>
                            <Image source={require('./../../assets/gallery1.png')} style={styles.gallery} />
                            <Image source={require('./../../assets/gallery2.png')} style={styles.gallery} />
                        </View>
                        <View style={styles._gallery_main}>
                            <Image source={require('./../../assets/gallery1.png')} style={styles.gallery} />
                            <Image source={require('./../../assets/gallery2.png')} style={styles.gallery} />
                        </View>
                        <View style={{marginBottom:300}}></View>
                    </ScrollView>

                </View>
                {/* >>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<<< */}
                <View style={styles._tab_main}>
                    <View style={styles._tab_show}>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/HomeWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/SearchWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/Camera.png')} style={styles._camera_icon} />
                            {/* <Text style={styles._tab_text}>Home</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/InboxWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Inbox</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/MeWhenSelected.png')} style={styles._home_icon} />
                            <Text style={styles._tab_selected_text}>Me</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles._line}></Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242a37",

    },
    //   tab bar
    _tab_main: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#212530",
    },
    _line: {
        backgroundColor: "white",
        height: 10,
        width: "50%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 20
    },
    _home_icon: {
        width: 25,
        height: 25,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _camera_icon: {
        width: 70,
        height: 55,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _tab_show: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    _tab_text: {
        color: "white",
        textAlign: "center",
        marginTop: 5,
        alignItems: "center",
        alignSelf: "center"
    },
    _tab_selected_text: {
        color: "#ebad4a",
        textAlign: "center",
        marginTop: 5,
        alignItems: "center",
        alignSelf: "center"
    },
    body_main: {
        margin: 20
    },
    _icons_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignItems: "center",
    },
    _profile_main: {
        // backgroundColor: "white",
        alignSelf: "center",
        marginTop: -25,
        alignItems: "center",
        textAlign: "center"
    },
    _user_name: {
        fontWeight: "normal",
        color: "white",
        textAlign: "center",
        marginTop: 10,
        fontSize: 18
    },
    _user_heading: {
        color: "#BCBCBC",
        fontSize: 17,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    },
    _user_des: {
        color: "white",
        fontSize: 17,
        textAlign: "center"
    },
    _user_status_main: {
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
        textAlign: "center",
        marginTop: 20
    },
    _likes: {
        fontSize: 13,
        color: "gray",
        textAlign: "center"

    },
    _likes_counter: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
        textAlign: "center"
    },
    profile_img: {
        width: 101,
        height: 101,
        borderRadius: 100
    },
    _gallery_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    gallery: {
        width: 150,
        height: 150,
        borderRadius: 20
    }
});
