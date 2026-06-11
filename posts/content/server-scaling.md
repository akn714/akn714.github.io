## Topics Covered
- Vertical Scaling
- Database Separation
- Read Replicas
- Horizontal Scaling
- Redis
- Kafka
- CDN
- Idempotency

## Monolithic Setup (The initial setup)

Initially, we deploy Backend Server and Database Server on the **same machine**.

Server Specs:
- RAM: 2 GB
- Storage: 512 GB SSD
- CPU: 2 Cores

Architecture:
```
User → Server (Backend + Database)
```

### Problems
- Backend and Database compete for CPU, RAM, and Disk I/O.
- Performance decreases as traffic grows.

# 1. Vertical Scaling (Scale Up)

When traffic starts increasing, the easiest solution is to increase the hardware of the existing server.

Example:

Before:
- RAM: 2 GB
- CPU: 2 Cores

After:
- RAM: 8 GB
- CPU: 8 Cores

Architecture:
```
User → Bigger Server
        ├── Backend
        └── Database
```

### Advantages
✅ Easy to implement

### Disadvantages
❌ Hardware has limits

❌ Expensive after a certain point

❌ Single point of failure, means if the server crashes, the whole application goes down.

# 2. Separate Backend and Database Servers

As traffic grows further Backend and Database start competing for resources.

- Database operations need: RAM, CPU, Disk I/O
- Backend needs: RAM, CPU

To avoid resource contention, move the database to a separate machine.

Architecture:
```
            Users
              ↓
        Backend Server
              ↓
        Database Server
```

### Advantages
- ✅ Better performance
- ✅ Independent scaling
- ✅ Easier maintenance

# 3. Read Replicas

Let's analyze database traffic. In most of the cases number of reads are much greater than number of writes.
```
Number of Reads >> Number of Writes
```

**Examples:**
```
Read:
- View profile
- View products
- View posts

Writes:
- Register user
- Create post
- Make payment
```

Since reads are much more frequent, they can overload the primary database, which can increase the latency of the server.

**Solution:** Create Read Replicas. Read Replicas are the copies of data stored in primary DB.

Architecture:
```
                 ┌─ Read Replica 1
Primary DB ──────┤
                 └─ Read Replica 2


Write Requests → Primary DB
Read Requests → Read Replicas
```

### Primary Database Responsibilities:
- INSERT
- UPDATE
- DELETE

### Read Replica Responsibilities:
- SELECT Queries Only

### How Replication Works
1. Data is written to Primary DB.
2. Changes are replicated to Read Replicas.
3. Read Replicas stay nearly synchronized with Primary DB.

### Important
- Replication is often asynchronous.
- A newly written record may take a short time to appear in replicas.
- This is called **Eventual Consistency**

### Advantages
- ✅ Reduces load on Primary DB
- ✅ Faster read performance
- ✅ Better scalability

# 4. Horizontal Scaling (Scale Out)

Eventually a single backend server becomes a bottleneck. Instead of buying a bigger machine, add more backend servers, this is known as horizontal scaling.

Architecture:
```
              Load Balancer
                    │
       ┌────────────┼────────────┐
       │            │            │
   Backend-1    Backend-2    Backend-3
```

### Load Balancer Responsibilities

- Distribute requests to multiple backend servers
- Health checks of all the servers
- Failover
- If one server crashes, Load Balancer routes traffic to healthy servers.

### Stateless Servers
For horizontal scaling, backend servers should be stateless.

Bad:
- Server-1 stores user session locally.
- If next request goes to Server-2:
- The, due to this the session is lost.

Good:
- Store session data in: Redis, Database.

So that Any server can handle any request.

### Advantages
- ✅ High Availability
- ✅ Fault Tolerance
- ✅ Easier Scaling

# 5. Redis
Redis is an in-memory data store. It is extremely fast because data is stored in RAM.

Architecture:
```
Backend <-> Redis
```

### Common Uses

#### A. Cache

Instead of querying database every time use Redis to store cache: `User → Backend → Redis`

If cache miss, search for data in db and then store result in Redis: `Backend → Database`

Advantages:
- ✅ Faster responses
- ✅ Reduced DB load

#### B. Session Storage
JWT tokens are usually stored on the client side.

Redis is commonly used for: Session IDs, Refresh Tokens, Login Sessions, OTP Storage

Flow:
1. User logs in.
2. Server creates `Session ID`.
3. Session data stored in Redis.
4. User receives `Session ID` cookie.
5. Now user has it's `Session ID` through which he/she can access his/her session data from redis.

Advantages:
- ✅ Centralized session management
- ✅ Works across multiple backend servers

# 6. Kafka
Kafka is a Distributed Event Streaming Platform. It is used for tasks that can be processed asynchronously.

Examples:
- Sending Emails
- Notifications
- Analytics
- Order Processing
- Log Processing

Architecture:
```
             User
              ↓
           Backend
              ↓
         Kafka Topic
              ↓
       Consumer Services
```

### Example
User places an order.

Backend:
1. Saves order in DB
2. Publishes event to Kafka

Consumers:
- Send Email
- Update Inventory
- Generate Invoice

### Advantages
- ✅ Handles huge traffic spikes
- ✅ Prevents data loss
- ✅ Decouples servicess
- ✅ Scales independently

# 7. CDN (Content Delivery Network)
Static assets should not be served from backend servers.

Examples:
- Images
- Videos
- CSS
- JavaScript
- Fonts

Store them on a CDN so that backend can only be used to serve only API requests.

Architecture:
```
              User
               ↓
     Nearest CDN Edge Server
```

If not found: `CDN → Origin Server`

Popular CDNs:
- Cloudflare
- Amazon CloudFront
- Akamai

Example:
- User in India gets files from India CDN node.
- User in USA gets files from USA CDN node.

### Advantages
- ✅ Lower latency
- ✅ Reduced backend load
- ✅ Faster website loading

# 8. Idempotency
Idempotency means performing the same operation multiple times produces the same result.

Very important for:
- Payments
- Orders
- Financial transactions

### Example
- Step 1: User clicks: "Pay ₹1000"
- Step 2: Request contains: `Idempotency-Key: 123e4567`
- Step 3: Server:
   1. Stores key in DB.
   2. Processes payment.
   3. Stores response.
- Step 4: Due to network issues: User retries payment.
- Step 5: Request again contains: `Idempotency-Key: 123e4567`
- Step 6: Server detects: "Already processed"
- Step 7: Returns previous response instead of charging again.

### Advantages
- ✅ Prevents duplicate payments
- ✅ Prevents duplicate orders
- ✅ Makes APIs safer

# Final Large-Scale Architecture

![image](./content/images/scalable-backend-architecture.png)

This architecture can handle millions of users when implemented correctly.