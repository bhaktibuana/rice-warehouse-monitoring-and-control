#include <WiFiNINA.h>

// network conf
char ssid[] = "Bhakti";
char pass[] = "inyourdream";
int status = WL_IDLE_STATUS;

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
  
}
