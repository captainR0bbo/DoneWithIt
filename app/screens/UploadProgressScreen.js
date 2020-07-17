import React from "react";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import { StyleSheet, Modal, View } from "react-native";

import Screen from "../components/Screen";

function UploadProgressScreen({ color, onDone, progress, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            //borderWidth={borderWidth}
            color={color}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            styles={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadProgressScreen;
