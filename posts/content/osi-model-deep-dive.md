In this blog you will learn the core concept of how data is transferred from one computer to another in a network through OSI model. It includes step-by-step data transformation across the 7 layers of OSI, involvement of switches and routers, and how data looks at each step.

**Overview of the OSI Model**

| Layer | Name         | Function                              | Example Protocols |
| ----- | ------------ | ------------------------------------- | ----------------- |
| 7     | Application  | End-user app interaction              | HTTP, SMTP        |
| 6     | Presentation | Encryption, formatting, compression   | TLS, SSL          |
| 5     | Session      | Manages sessions and connections      | NetBIOS, RPC      |
| 4     | Transport    | Reliable delivery, segmentation       | TCP, UDP          |
| 3     | Network      | Logical addressing and routing        | IP, ICMP          |
| 2     | Data Link    | Physical addressing (MAC) and framing | Ethernet          |
| 1     | Physical     | Transmission of bits over the medium  | Cables, Wi-Fi     |

### Full End-to-End Data Transfer (Computer 1 → Computer 2)

Scenario:

*   Computer 1 IP: `192.168.1.2`, MAC: `AA:AA:AA:AA:AA:AA`
*   Computer 2 IP: `192.168.2.2`, MAC: `BB:BB:BB:BB:BB:BB`
*   Router MAC (in): `11:11:11:11:11:11`, MAC (out): `22:22:22:22:22:22`

Devices:

*   Switch 1 (Layer 2 device) between Computer 1 and Router
*   Router (Layer 3 device) between Switch 1 and Switch 2
*   Switch 2 (Layer 2 device) between Router and Computer 2

### **Computer 1: Data Creation (All 7 Layers)**

1. **Application Layer (L7)**

*   Data: `”Hello, Computer 2!”`

2. **Presentation Layer (L6)**

*   Encrypts or formats data (e.g., SSL/TLS)
*   Output: Encrypted Data Blob

3. **Session Layer (L5)**

*   Opens a session if needed (e.g., via cookies, handshakes)

4. **Transport Layer (L4)**

*   Adds TCP header (port numbers, sequence, ACK)
*   Output: `TCP Segment`

5. **Network Layer (L3)**

*   Adds IP header with:
*   Source IP: `192.168.1.2`
*   Destination IP: `192.168.2.2`
*   Output: `IP Packet`

6. **Data Link Layer (L2)**

*   Adds MAC header with:
*   Source MAC: `AA:AA:AA:AA:AA:AA`
*   Destination MAC: `11:11:11:11:11:11` (Router MAC)
*   Output: `Ethernet Frame`

7. **Physical Layer (L1)**

*   Transmits bits over the cable to Switch 1

### **Switch 1 (Layer 2 Device)**

*   Reads only the MAC header (Layer 2)
*   Forwards the frame based on MAC table
*   Does **not modify** the frame
*   Sends the frame to the **Router**

### Router (Layer 3 Device)

1. **Receives the Ethernet Frame**

*   MAC Destination = Router’s MAC → Accepts it

2. **Strips Layer 2 Header (Ethernet)**

*   Keeps the **IP Packet** (L3 and above remain unchanged)

3. **Reads Destination IP (**`**192.168.2.2**`**)**

*   Finds next hop (Computer 2 in this case)

4. **Uses ARP to find MAC of Computer 2** → `BB:BB:BB:BB:BB:BB`

5. **Builds a New Ethernet Frame**:

*   Source MAC: `22:22:22:22:22:22` (Router’s outgoing interface)
*   Destination MAC: `BB:BB:BB:BB:BB:BB`
*   Wraps original IP Packet

6. **Sends new frame to Switch 2**

### Switch 2 (Layer 2 Device)

*   Reads Layer 2 (Ethernet frame)
*   Forwards based on MAC table to Computer 2
*   Does not alter the frame

### Computer 2: Data Reception (Layer 1 → Layer 7)

1.  **Physical Layer (L1)**

*   Receives the raw bits

2. **Data Link Layer (L2)**

*   Reads MAC header
*   Destination MAC matches → Accepts the frame
*   Strips MAC header

3. **Network Layer (L3)**

*   Reads IP header
*   Destination IP matches → Accepts the packet
*   Strips IP header

4. **Transport Layer (L4)**

*   Uses TCP header to reassemble and manage data

5. **Session Layer (L5)**

*   Maintains/ends the session

6. **Presentation Layer (L6)**

*   Decrypts and decodes the data

7. **Application Layer (L7)**

*   Presents `”Hello, Computer 2!”` to the user/app

### Summary Table of Data Formats at Each Layer


| Layer | Sender                         | Router (Intermediate)              | Receiver                     |
| ----- | ------------------------------ | ---------------------------------- | ---------------------------- |
| L1    | Bits                           | Bits                               | Bits                         |
| L2    | Ethernet Frame (MAC to Router) | Ethernet Frame (MAC to Computer 2) | Ethernet Frame (MAC to Self) |
| L3    | IP Packet                      | IP Packet (same)                   | IP Packet                    |
| L4    | TCP Segment                    | TCP Segment                        | TCP Segment                  |
| L5    | Session Data                   | Session Data                       | Session Data                 |
| L6    | Encrypted Data                 | Encrypted Data                     | Decrypted Data               |
| L7    | Message: "Hello"               | -                                  | Message: "Hello"             |

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ruwnuhT-9i1rFMetKc7hPg.jpeg)

### Key Takeaways

*   **Computers implement all 7 OSI layers** to fully understand and generate end-to-end communication.
*   **Switches work at Layer 2**, forward frames based on MAC addresses.
*   **Routers work at Layer 3**, route packets based on IP addresses.
*   **Only routers and end devices read IP addresses** — switches do not.
*   **MAC address changes hop-by-hop**, IP address stays constant.
*   **Each layer encapsulates the data**, and the reverse happens on the receiving end.

Hope you understood how actually data transfer from one computer to another work under the hood in a network.