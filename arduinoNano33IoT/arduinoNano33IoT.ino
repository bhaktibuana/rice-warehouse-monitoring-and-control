#include <Arduino_JSON.h>
#include <ArduinoHttpClient.h>
#include <WiFiNINA.h>

// network conf
char ssid[] = "Bhakti";
char pass[] = "inyourdream";
int status = WL_IDLE_STATUS;
WiFiClient client;

// api conf
char * server = "192.168.85.221";
int port = 3001;
char * apiGetData = "/api/get_state";
char * apiPutDataAutomatic = "/api/put_state_automatic";

HttpClient http = HttpClient(client, server, port);

float temp1, temp2, hum1, hum2;
bool rMotor1, rMotor2, rHum1, rHum2;

void setup() {
  Serial.begin(115200);

  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    while (true);
  }

  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);

    delay(3000);
  }

  Serial.println("You are connected to the network!");
}

void loop() {
  JSONVar getRes = JSON.parse(getDataServer(apiGetData));

  if (JSON.typeof(getRes) == "undefined") {
    Serial.println("Parsing input failed");
    return;
  }

//  JSONVar key = getRes.keys();
//
//  for (int i = 0; i < key.length(); i++) {
//    JSONVar value = getRes[key[i]];
//    Serial.print(key[i]);
//    Serial.print(": ");
//    Serial.println(value);
//  }

  String stateMode = JSON.stringify(getRes["state_mode"]);
  Serial.println(stateMode);

  if (stateMode == "\"automatic\"") {
    temp1 = random(2501, 3599) / 100.00;
    temp2 = random(2501, 3599) / 100.00;
    hum1 = random(5001, 99.99) / 100.00;
    hum2 = random(5001, 9999) / 100.00;

    if (temp1 > 31.00) {
      rMotor1 = true;
    } else {
      rMotor1 = false;
    }

    if (temp2 > 31.00) {
      rMotor2 = true;
    } else {
      rMotor2 = false;
    }

    if (hum1 > 85.00) {
      rHum1 = true;
    } else {
      rHum1 = false;
    }

    if (hum2 > 85.00) {
      rHum2 = true;
    } else {
      rHum2 = false;
    }

    putStateDataAutomatic(
      apiPutDataAutomatic,
      temp1,
      hum1,
      rMotor1,
      rHum1,
      temp2,
      hum2,
      rMotor2,
      rHum2
    );

    Serial.println();
  } else {
    Serial.println("GAGAL");
  }
}

String getDataServer(char * apiUrl) {
  http.get(apiUrl);
  int statusCode = http.responseStatusCode();
  String response = "";

  if (statusCode == 200) {
    Serial.println("Status Code: " + String(statusCode));
    response = http.responseBody();
    int strLen = response.length();
    response.remove(strLen - 1, 1);
    response.remove(0, 1);
  } else {
    Serial.println("Status Code: " + String(statusCode));
  }

  return response;
}

void putStateDataAutomatic(
  char * apiUrl,
  float t1,
  float h1,
  bool rm1,
  bool rh1,
  float t2,
  float h2,
  bool rm2,
  bool rh2
) {
  String contentType = "application/x-www-form-urlencoded";
  String putData = "state_temperature1=" + String(t1) + "&state_humidity1=" + String(h1) + "&state_relaymotor1=" + String(rm1) + "&state_relayhumidifier1=" + String(rh1) + "&state_temperature2=" + String(t2) + "&state_humidity2=" + String(h2) + "&state_relaymotor2=" + String(rm2) + "&state_relayhumidifier2=" + String(rh2);

  http.put(apiUrl, contentType, putData);
  int statusCode = http.responseStatusCode();
  String response = "";

  if (statusCode == 200) {
    Serial.println("Status Code: " + String(statusCode));
    response = http.responseBody();
    int strLen = response.length();
    response.remove(strLen - 1, 1);
    response.remove(0, 1);
    Serial.println(response);
  } else {
    Serial.println("Status Code: " + String(statusCode));
  }

}
