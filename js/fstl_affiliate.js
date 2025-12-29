 // FSTL Affiliate Revenue System
// Tracks users, referrals, transactions, and total revenue

class FSTLAffiliate {
    constructor() {
        this.users = [];          // Registered users
        this.referrals = {};      // Referral mapping
        this.transactions = [];   // Completed services
        this.revenue = 0;         // Total revenue
    }

    // Register a new user; optional referral code
    registerUser(username, referralCode = null) {
        if (!this.users.find(u => u.username === username)) {
            this.users.push({ username, referralCode, credits: 0 });
            if (referralCode) {
                if (!this.referrals[referralCode]) this.referrals[referralCode] = [];
                this.referrals[referralCode].push(username);
            }
        }
    }

    // Complete a transaction and distribute affiliate credits
    completeTransaction(username, amount) {
        this.transactions.push({ username, amount, timestamp: Date.now() });
        this.revenue += amount;

        // Reward the referrer (Tier 1: 10%)
        const user = this.users.find(u => u.username === username);
        if (user && user.referralCode) {
            const referrer = this.users.find(u => u.username === user.referralCode);
            if (referrer) {
                referrer.credits += amount * 0.10; 
            }
        }
    }

    // Get a dashboard summary
    getDashboard() {
        return {
            totalUsers: this.users.length,
            totalTransactions: this.transactions.length,
            totalRevenue: this.revenue,
            userCredits: this.users.map(u => ({ username: u.username, credits: u.credits })),
            referrals: this.referrals
        };
    }
}

// Example usage for testing
const fstl = new FSTLAffiliate();

// Register users
fstl.registerUser("Alice");
fstl.registerUser("Bob", "Alice");  
fstl.registerUser("Charlie", "Bob");

// Complete transactions
fstl.completeTransaction("Alice", 100);
fstl.completeTransaction("Bob", 50);
fstl.completeTransaction("Charlie", 70);

// Output dashboard to console
console.log(fstl.getDashboard());

// Export for backend integration (Node.js or browser)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fstl;
}