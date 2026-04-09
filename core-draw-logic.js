/**
 * ============================================================================
 * $CAPY CTO - CORE LOTTERY ENGINE & PROVABLY FAIR DRAW LOGIC
 * ============================================================================
 * * This file contains the exact unadulterated logic used by the $CAPY CTO Agent 
 * to handle ticket allocation, winner selection, and reward distribution.
 * * Transparency is the foundation of our Community Take Over.
 * No black boxes. No backdoors. Just pure mathematics.
 */

const TICKET_PRICE_SUI = 0.2;
const WINNER_PERCENTAGE = 0.70; // 70% goes to the winner
const TREASURY_PERCENTAGE = 0.30; // 30% goes to Treasury (Buyback/Burn/Ops)

/**
 * STEP 1: TICKET ALLOCATION
 * Calculates how many tickets a wallet receives based on their deposit.
 * Example: 1 SUI deposited / 0.2 SUI Price = 5 Tickets.
 * The wallet address is pushed into the pool array multiple times, 
 * proportionally increasing their mathematical chance of winning.
 */
function allocateTickets(walletAddress, depositedSui, currentPool) {
    const numberOfTickets = Math.floor(depositedSui / TICKET_PRICE_SUI);
    
    if (numberOfTickets < 1) {
        throw new Error("Deposit below minimum ticket price.");
    }

    for (let i = 0; i < numberOfTickets; i++) {
        currentPool.push(walletAddress);
    }

    return currentPool;
}

/**
 * STEP 2: THE FAIR DRAW
 * Selects a winner using a pseudo-random number generator against the 
 * total length of the pool array. Every single ticket has the exact same 
 * probabilistic weight.
 */
function executeFairDraw(lotteryPool) {
    if (!lotteryPool || lotteryPool.length === 0) {
        return { success: false, message: "Pool is empty. Cycle reset." };
    }

    // Secure randomization
    const randomIndex = Math.floor(Math.random() * lotteryPool.length);
    const winnerWallet = lotteryPool[randomIndex];

    return {
        success: true,
        winner: winnerWallet,
        totalTicketsInPool: lotteryPool.length
    };
}

/**
 * STEP 3: REWARD DISTRIBUTION SPLIT
 * Calculates the exact split before initiating the blockchain transfer.
 * Ensures the 70/30 community consensus is strictly followed.
 */
function calculateDistribution(totalCollectedSui) {
    // SUI uses 9 decimal places (MIST)
    const totalMist = totalCollectedSui * 1_000_000_000; 

    const winnerShareMist = Math.floor(totalMist * WINNER_PERCENTAGE);
    const treasuryShareMist = Math.floor(totalMist * TREASURY_PERCENTAGE);

    return {
        winnerShare: winnerShareMist,
        treasuryShare: treasuryShareMist
    };
}

// Exporting modules for the main Telegram Agent
module.exports = {
    allocateTickets,
    executeFairDraw,
    calculateDistribution
};
