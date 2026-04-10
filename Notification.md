# 🛰️ CapySui Distribution & Notification Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Ubuntu 24.04](https://img.shields.io/badge/OS-Ubuntu_24.04-orange?logo=ubuntu)](https://ubuntu.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)

A high-performance monitoring and notification suite for the **CapySui Ecosystem**. This system tracks reward distributions, treasury health, and cryptographic fairness in real-time via Telegram.

---

## 📖 Overview

The **Notification Engine** is designed to provide maximum transparency for decentralized lottery and reward systems. It monitors on-chain events and ensures that participants and administrators are instantly notified of every 70/30 reward split.

### Core Capabilities
* **Real-time Alerts:** Instant Telegram notifications for all system events.
* **70/30 Split Tracking:** Automated verification of treasury vs. user reward logic.
* **Provably Fair Integration:** Direct linking to source code for cryptographic verification.
* **High Reliability:** Optimized for Ubuntu 24.04 LTS environments using PM2 process management.

---

## 🛠️ Technical Stack

* **Runtime:** Node.js (v18+)
* **Framework:** [Telegraf](https://telegraf.js.org/) (Telegram Bot API)
* **Environment:** GNU/Linux 6.8.0 x86_64
* **Integrity:** Provably Fair SHA-256 Verification

---

## 📊 Notification Standards

The system uses standardized templates to ensure clarity and professionalism in all outbound alerts:

### 1. Reward Distribution
Used when the contract executes the 70/30 prize distribution.
> 🛠️ **SYSTEM: REWARD NOTIFICATION** > 💰 **Total Prize:** [Amount]  
> 🏛️ **Treasury (30%):** [Calculated]  
> 👥 **Users (70%):** [Calculated]  
> ⚖️ **Provably Fair:** [Verify on GitHub]

### 2. Treasury Management
Monitors the secure vault address: `0x59325cd5949c6b44265e4241024dbc5bd72...`
> 🛠️ **SYSTEM: TREASURY UPDATE** > 📥 **Action:** Inbound Deposit  
> 🏛️ **Vault:** Secured  

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone [https://github.com/capysuicto/Source.git](https://github.com/capysuicto/Source.git)
cd Source
npm install
---
# 🛰️ Master Notification & Distribution System
A robust, Telegraf-based notification engine designed for real-time monitoring of reward distributions, treasury management, and provably fair verification. Built for transparency and high-speed delivery.
## 🚀 Overview
This system acts as the "Command Center" for your automated distributions. It ensures that every transaction is logged, every reward is verified, and administrators are alerted instantly via Telegram.
### Key Features:
 * **Automated Reward Notifier:** Real-time alerts for the 70/30 distribution split.
 * **Treasury Monitoring:** Track 0x5932...d72 vault movements with high precision.
 * **Provably Fair Integration:** Built-in verification links to ensure cryptographic integrity.
 * **Rate-Limit Optimized:** Intelligent delays between messages to comply with Telegram's API limits.
## 🛠️ Notification Architecture
The bot generates formatted Markdown alerts for critical events. Below are the standard templates used in the full-test.js engine:
### 1. Reward Distribution (70/30 Split)
Triggered whenever a bounty or profit-share is executed.
> **🛠️ TEST: REWARD NOTIF**
> 💰 **Amount:** 1000 USDT
> 🏦 **Treasury (30%):** 300 USDT
> 👥 **Users (70%):** 700 USDT
> ⚖️ ***Provably Fair:*** Check Code Logic
> 
### 2. Treasury Inbound
Monitoring the health of the project vault.
> **🛠️ TEST: TREASURY ALERT**
> 📥 **Inbound:** 5.0 ETH
> 🏛️ **Vault Address:** 0x5932...d72
> ✅ **Status:** Confirmed
> 
## ⚙️ Installation & Setup
Ensure you have Node.js installed on your Ubuntu 24.04 LTS environment.
 1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
   ```
 2. **Install dependencies:**
   ```bash
   npm install telegraf
   
   ```
 3. **Configure Environment Variables:**
   Edit your full-test.js or create a .env file:
   ```javascript
   const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
   const MY_ID = 6524687071;
   
   ```
 4. **Run the Test Suite:**
   ```bash
   node full-test.js
   
   ```
## 📊 System Requirements
Tested and optimized for:
 * **OS:** Ubuntu 24.04 LTS
 * **Kernel:** Linux 6.8.0-106-generic
 * **Runtime:** Node.js v18+
 * **Dependencies:** Telegraf 4.x
## ⚖️ Transparency & Security
This project adheres to the **Open Source Verification** standard. All distribution logic can be audited via the /Source directory to ensure that the 70/30 split is handled by the smart contract as described, without manual interference.
### Tips for a better GitHub presence:
 * **Screenshots:** Take a screenshot of the Telegram notifications and put them in an assets/ folder. Visuals increase trust by 10x.
 * **Shields.io:** Add badges for "License: MIT", "Build: Passing", and "Node: v20".
 * **License:** Make sure to include an LICENSE file (MIT is standard for open source).
This format shifts the focus from "a simple script" to a **"Professional Distribution Infrastructure,"** which is much more attractive to users and collaborators.
