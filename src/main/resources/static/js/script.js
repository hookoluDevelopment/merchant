// Application State
const state = {
    walletBalance: 24850.50,
    rechargeAmount: 299,
    aepsAmount: 1000,
    selectedDevice: 'morefun'
};

// Toast Helper
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function updateWalletUI() {
    const formatted = `₹ ${state.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    const el = document.getElementById('headerWalletBal');
    if (el) el.textContent = formatted;
}

// ================= ROUTE TEMPLATES =================
const routes = {
    '/dashboard': {
        title: 'Dashboard',
        render: () => `
            <div class="card" style="display:flex;align-items:center;gap:0.75rem;padding:0.9rem 1.25rem;">
                <span style="color:var(--primary);font-size:1.2rem;">✨</span>
                <div>
                    <strong>HookoluPay Retailer Update</strong>
                    <span style="background:var(--green-light);color:var(--green);font-size:0.7rem;padding:2px 6px;border-radius:4px;font-weight:700;margin-left:6px;">ACTIVE</span>
                    <div style="font-size:0.8rem;color:var(--text-muted);">High commission festival season is live! Earn up to ₹12.50 per mATM and DMT transaction.</div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns: 1.5fr 2fr;gap:1.25rem;margin-bottom:1.25rem;">
                <div class="wallet-hero">
                    <div>
                        <div style="display:flex;justify-content:space-between;font-size:0.75rem;opacity:0.9;">
                            <span>RETAILER WALLET 1 (MAIN)</span>
                            <span>HKP - 89214</span>
                        </div>
                        <div style="font-size:0.8rem;margin-top:0.5rem;opacity:0.85;">Current Balance</div>
                        <h2>₹${state.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
                    </div>
                    <div class="hero-actions">
                        <button class="btn-white" onclick="location.hash='#/topup'">↙ Add Funds (QR)</button>
                        <button class="btn-translucent" onclick="location.hash='#/services/cashout'">↗ Bank Settlement</button>
                    </div>
                </div>

                <div class="grid-4">
                    <div class="card" style="margin:0;display:flex;flex-direction:column;justify-content:space-between;">
                        <span style="color:var(--text-muted);font-size:0.8rem;">Today's Txns</span>
                        <strong style="font-size:1.4rem;">7</strong>
                        <span style="color:var(--green);font-size:0.75rem;font-weight:600;">98.5% Success</span>
                    </div>
                    <div class="card" style="margin:0;display:flex;flex-direction:column;justify-content:space-between;">
                        <span style="color:var(--text-muted);font-size:0.8rem;">Total Volume</span>
                        <strong style="font-size:1.4rem;">₹21.0k</strong>
                        <span style="color:var(--text-muted);font-size:0.75rem;">T+1,842</span>
                    </div>
                    <div class="card" style="margin:0;display:flex;flex-direction:column;justify-content:space-between;">
                        <span style="color:var(--text-muted);font-size:0.8rem;">Commission</span>
                        <strong style="font-size:1.4rem;color:var(--green);">+₹153.3</strong>
                        <span style="color:var(--text-muted);font-size:0.75rem;">Credited to W1</span>
                    </div>
                    <div class="card" style="margin:0;display:flex;flex-direction:column;justify-content:space-between;">
                        <span style="color:var(--text-muted);font-size:0.8rem;">Success / Failed</span>
                        <strong style="font-size:1.4rem;">7 / <span style="color:#ef4444;">0</span></strong>
                        <span style="color:var(--text-muted);font-size:0.75rem;">0 Pending</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <strong>7-Day Transaction Performance</strong>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Daily business volume and commission breakdown</div>
                    </div>
                    <div style="font-size:0.78rem;display:flex;gap:1rem;">
                        <span><strong style="color:var(--primary);">●</strong> Volume</span>
                        <span><strong style="color:var(--green);">●</strong> Commission</span>
                    </div>
                </div>
                <div class="chart-bars">
                    ${[['Thu', 45], ['Fri', 55], ['Sat', 95], ['Sun', 70], ['Mon', 100], ['Tue', 95], ['Today', 48]]
                        .map(([day, h]) => `
                        <div class="bar-col">
                            <div class="bar-fill" style="height:${h}px;"></div>
                            <span style="font-size:0.75rem;color:var(--text-muted);">${day}</span>
                        </div>`).join('')}
                </div>
            </div>

            <h3 style="font-size:0.95rem;margin-bottom:0.85rem;">Quick Service Portals</h3>
            <div class="grid-4">
                <div class="card" style="cursor:pointer;" onclick="location.hash='#/services/matm'">
                    <div style="font-size:1.25rem;margin-bottom:0.5rem;">💳</div>
                    <strong>mATM Cash Withdraw</strong>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Swipe / Insert Debit Card</div>
                </div>
                <div class="card" style="cursor:pointer;" onclick="location.hash='#/services/dmt'">
                    <div style="font-size:1.25rem;margin-bottom:0.5rem;">✈️</div>
                    <strong>Money Transfer (DMT)</strong>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Instant IMPS to Any Bank</div>
                </div>
                <div class="card" style="cursor:pointer;" onclick="location.hash='#/services/aeps'">
                    <div style="font-size:1.25rem;margin-bottom:0.5rem;">🖐️</div>
                    <strong>Unified AEPS</strong>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Cash Withdraw via Aadhaar</div>
                </div>
                <div class="card" style="cursor:pointer;" onclick="location.hash='#/services/recharge'">
                    <div style="font-size:1.25rem;margin-bottom:0.5rem;">⚡</div>
                    <strong>Mobile &amp; DTH Recharge</strong>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Prepaid &amp; DTH Plans</div>
                </div>
            </div>
        `
    },

    '/services/dmt': {
        title: 'Money Transfer (DMT)',
        render: () => `
            <div class="card">
                <h3>Domestic Money Transfer (DMT)</h3>
                <p style="color:var(--text-muted);font-size:0.8rem;margin:0.25rem 0 1rem;">Instant 24x7 IMPS / NEFT money transfer to any bank account in India.</p>
                <div style="display:flex;gap:0.75rem;max-width:600px;">
                    <input type="text" class="form-control" value="9811223344" placeholder="Enter Remitter Mobile">
                    <button class="btn-primary" style="white-space:nowrap;" onclick="showToast('Remitter Amitabh Sen verified!')">🔍 Find Remitter</button>
                </div>
            </div>

            <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:1rem;">
                    <div class="avatar-circle" style="background:var(--primary-light);color:var(--primary);width:42px;height:42px;">A</div>
                    <div>
                        <strong>Amitabh Sen</strong>
                        <span style="background:var(--green-light);color:var(--green);font-size:0.7rem;padding:2px 8px;border-radius:99px;font-weight:600;margin-left:6px;">KYC Verified</span>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">Mobile: +91 9811223344</div>
                    </div>
                </div>
                <div style="width:240px;">
                    <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:4px;">
                        <span style="color:var(--text-muted);">Monthly Limit</span>
                        <strong>₹16,500 left</strong>
                    </div>
                    <div style="height:6px;background:#e5e7eb;border-radius:99px;overflow:hidden;">
                        <div style="width:34%;height:100%;background:var(--primary);"></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-top:4px;">
                        <span>Used: ₹8,500</span>
                        <span>Total: ₹25,000</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                    <div>
                        <strong>Saved Beneficiaries</strong>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Select a beneficiary to transfer funds or add a new account</div>
                    </div>
                    <button class="btn-outline" style="color:var(--primary);border-color:#bfdbfe;" onclick="showToast('Add Beneficiary modal triggered')">+ Add Beneficiary</button>
                </div>

                <div class="grid-2">
                    <div class="card" style="margin:0;border-color:#93c5fd;">
                        <div style="display:flex;justify-content:space-between;">
                            <strong>Rajesh Kumar</strong>
                            <span style="color:var(--green);font-size:0.75rem;font-weight:600;">✓ Verified</span>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin:4px 0;">A/C: 012983719283</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1rem;">🏦 Punjab National Bank (PUNB0129800)</div>
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <span style="cursor:pointer;color:#9ca3af;">🗑️</span>
                            <button class="btn-primary" onclick="showToast('Initiating IMPS transfer to Rajesh Kumar...')">✈️ Transfer Money</button>
                        </div>
                    </div>

                    <div class="card" style="margin:0;">
                        <div style="display:flex;justify-content:space-between;">
                            <strong>Pooja Sen</strong>
                            <span style="color:var(--green);font-size:0.75rem;font-weight:600;">✓ Verified</span>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin:4px 0;">A/C: 334455667788</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1rem;">🏦 State Bank of India (SBIN0001234)</div>
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <span style="cursor:pointer;color:#9ca3af;">🗑️</span>
                            <button class="btn-primary" onclick="showToast('Initiating IMPS transfer to Pooja Sen...')">✈️ Transfer Money</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    '/services/recharge': {
        title: 'Recharge Services',
        render: () => `
            <div style="display:flex;justify-content:center;">
                <div class="pill-tabs">
                    <button class="pill-tab active">📱 Mobile Prepaid</button>
                    <button class="pill-tab" onclick="showToast('Switched to Mobile Postpaid')">⚡ Mobile Postpaid</button>
                    <button class="pill-tab" onclick="showToast('Switched to DTH Connection')">📺 DTH Connection</button>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3>Mobile Recharge</h3>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Fast recharge with instant 2% commission credited to your wallet.</p>

                    <div class="form-group">
                        <label>Mobile Number</label>
                        <input type="text" class="form-control" placeholder="Enter 10-digit Mobile" maxlength="10">
                    </div>
                    <div class="form-group">
                        <label>Operator</label>
                        <select class="form-control">
                            <option>Reliance Jio</option>
                            <option>Airtel</option>
                            <option>Vi (Vodafone Idea)</option>
                            <option>BSNL</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Circle / State</label>
                        <select class="form-control">
                            <option>Delhi NCR</option>
                            <option>Odisha</option>
                            <option>Maharashtra</option>
                            <option>Uttar Pradesh</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Recharge Amount</label>
                        <input type="number" id="rechargeAmtInput" class="form-control" value="${state.rechargeAmount}" oninput="updateRechargeCalc(this.value)">
                    </div>

                    <div style="background:var(--green-light);color:var(--green);padding:0.75rem 1rem;border-radius:8px;display:flex;justify-content:space-between;font-weight:600;margin-bottom:1rem;">
                        <span>Retailer Commission (2%):</span>
                        <span id="rechargeComm">+₹${(state.rechargeAmount * 0.02).toFixed(2)}</span>
                    </div>

                    <button id="payRechargeBtn" class="btn-primary full-width" onclick="showToast('Recharge of ₹' + state.rechargeAmount + ' processed!')">
                        Pay &amp; Recharge ₹${state.rechargeAmount}
                    </button>
                </div>

                <div class="card">
                    <div style="display:flex;justify-content:space-between;margin-bottom:1rem;">
                        <strong>Browse Plans &amp; Offers</strong>
                        <span style="color:var(--primary);font-size:0.8rem;font-weight:600;">Reliance Jio</span>
                    </div>

                    <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                        <div>
                            <strong>₹349</strong> <span style="background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:0.72rem;margin-left:4px;">28 Days</span>
                            <span style="color:var(--primary);font-size:0.78rem;font-weight:600;margin-left:6px;">2.0 GB/day</span>
                            <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">Unlimited Voice + 5G Unlimited Data Trial</div>
                        </div>
                        <button class="btn-primary" onclick="selectPlan(349)">Select</button>
                    </div>

                    <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                        <div>
                            <strong>₹899</strong> <span style="background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:0.72rem;margin-left:4px;">90 Days</span>
                            <span style="color:var(--primary);font-size:0.78rem;font-weight:600;margin-left:6px;">2.0 GB/day</span>
                            <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">Quarterly power pack + OTT apps bundle</div>
                        </div>
                        <button class="btn-primary" onclick="selectPlan(899)">Select</button>
                    </div>
                </div>
            </div>
        `
    },

    '/services/billpay': {
        title: 'Bharat BillPay (BBPS)',
        render: () => `
            <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <span style="background:#ffedd5;color:#c2410c;font-size:0.7rem;padding:2px 8px;border-radius:4px;font-weight:700;">NPCI BBPS Certified</span>
                    <span style="font-size:0.78rem;color:var(--text-muted);margin-left:8px;">One-stop utility bill payments</span>
                    <h3 style="margin-top:6px;">Bharat BillPay (BBPS)</h3>
                    <p style="font-size:0.8rem;color:var(--text-muted);">Pay electricity, water, gas, broadband and insurance bills with instant receipt.</p>
                </div>
                <div style="border:1px solid var(--border);padding:0.65rem 1rem;border-radius:8px;font-size:0.8rem;">
                    Retailer Commission: <strong style="color:var(--green);">₹3.50 flat per bill</strong>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:0.75rem;margin-bottom:1.25rem;">
                ${[
                    ['⚡', 'Electricity', true],
                    ['🔥', 'Piped Gas & Cylinder', false],
                    ['💧', 'Water Supply', false],
                    ['📶', 'Broadband & Landline', false],
                    ['🚗', 'FASTag Recharge', false],
                    ['💳', 'Loan EMI Repayment', false],
                    ['🛡️', 'Insurance Premium', false]
                ].map(([icon, name, active]) => `
                    <div class="card" style="margin:0;text-align:center;padding:1rem 0.5rem;cursor:pointer;${active ? 'border-color:var(--primary);background:var(--primary-light);' : ''}">
                        <div style="font-size:1.25rem;margin-bottom:0.4rem;">${icon}</div>
                        <div style="font-size:0.75rem;font-weight:600;${active ? 'color:var(--primary);' : ''}">${name}</div>
                    </div>
                `).join('')}
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3>Electricity Bill Details</h3>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Select electricity board/biller and enter consumer ID to fetch due bill.</p>
                    <div class="form-group">
                        <label>Select Biller / Service Board</label>
                        <select class="form-control">
                            <option>UPPCL (Urban)</option>
                            <option>TP Central Odisha (TPCODL)</option>
                            <option>Tata Power Delhi</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Consumer ID / Account No.</label>
                        <input type="text" class="form-control" value="100293847">
                    </div>
                    <div class="form-group">
                        <label>Customer Mobile Number (For SMS Confirmation)</label>
                        <input type="text" class="form-control" value="9876543210">
                    </div>
                    <button class="btn-primary full-width" onclick="fetchBBPSBill()">🔍 Fetch Bill from BBPS</button>
                </div>

                <div class="card" id="bbpsBillResult" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#f9fafb;border-style:dashed;">
                    <div style="font-size:2rem;color:#9ca3af;margin-bottom:0.5rem;">📄</div>
                    <strong>No Bill Fetched Yet</strong>
                    <p style="font-size:0.78rem;color:var(--text-muted);max-width:260px;margin-top:4px;">Enter customer consumer ID on the left and click "Fetch Bill from BBPS" to view current bill details.</p>
                </div>
            </div>
        `
    },

    '/services/aeps': {
        title: 'Unified AEPS',
        render: () => `
            <div style="display:flex;justify-content:center;">
                <div class="pill-tabs">
                    <button class="pill-tab active">💵 Cash Withdrawal</button>
                    <button class="pill-tab" onclick="showToast('Switched to Balance Enquiry')">📋 Balance Enquiry</button>
                    <button class="pill-tab" onclick="showToast('Switched to Mini Statement')">🕒 Mini Statement</button>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:1.25rem;">
                <div class="card">
                    <h3>Unified AEPS Cash Withdrawal</h3>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Aadhaar Enabled Payment System powered by NPCI Central Switch.</p>

                    <div class="form-group">
                        <label>Select Customer Bank</label>
                        <select class="form-control">
                            <option>State Bank of India</option>
                            <option>Punjab National Bank</option>
                            <option>HDFC Bank</option>
                            <option>Bank of Baroda</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Customer 12-Digit Aadhaar Number</label>
                        <input type="text" class="form-control" value="554433221100" maxlength="12">
                    </div>
                    <div class="form-group">
                        <label>Customer Mobile Number</label>
                        <input type="text" class="form-control" value="9811223344" maxlength="10">
                    </div>
                    <div class="form-group">
                        <label>Withdrawal Amount</label>
                        <input type="number" id="aepsAmtInput" class="form-control" value="${state.aepsAmount}">
                        <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
                            ${[500, 1000, 2000, 3000, 5000, 10000].map(v =>
                                `<button type="button" class="btn-outline ${v === state.aepsAmount ? 'active' : ''}" onclick="setAepsAmt(${v})">₹${v}</button>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Connected Biometric Device</label>
                        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;">
                            <button type="button" class="btn-outline active">Mantra MFS100</button>
                            <button type="button" class="btn-outline">Morpho MSO 1300</button>
                            <button type="button" class="btn-outline">Startek FM220</button>
                        </div>
                    </div>

                    <label style="display:flex;gap:0.5rem;font-size:0.78rem;color:var(--text-muted);margin-bottom:1rem;">
                        <input type="checkbox" checked> I give my consent to HookoluPay and NPCI to fetch my Aadhaar biometric details for the purpose of this financial transaction.
                    </label>

                    <button id="aepsSubmitBtn" class="btn-primary full-width" disabled style="opacity:0.5;" onclick="showToast('AEPS Withdrawal Authorized!')">
                        Authorize &amp; Withdraw ₹${state.aepsAmount}
                    </button>
                </div>

                <div class="card biometric-box" style="height:fit-content;">
                    <strong>Biometric Sensor</strong>
                    <span style="font-size:0.75rem;color:var(--text-muted);">Mantra MFS100 RD Service Ready</span>
                    <div class="fingerprint-icon" id="aepsFingerIcon">🖐️</div>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Ask customer to place thumb/index finger firmly on the sensor.</p>
                    <button class="btn-dark" onclick="captureBiometric('aeps')">👆 Capture Fingerprint</button>
                </div>
            </div>
        `
    },

    '/services/aadhaar-pay': {
        title: 'Aadhaar Pay',
        render: () => `
            <div style="max-width:820px;margin:0 auto;">
                <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <span style="background:var(--primary-light);color:var(--primary);font-size:0.72rem;padding:3px 8px;border-radius:4px;font-weight:600;">🏪 Merchant Direct Settlement</span>
                        <h3 style="margin-top:0.5rem;">Aadhaar Pay (Merchant Collection)</h3>
                        <p style="font-size:0.78rem;color:var(--text-muted);">Collect payments directly from customer bank accounts using Aadhaar authentication when ATM withdrawal limits are exhausted.</p>
                    </div>
                    <div style="text-align:right;font-size:0.78rem;">
                        <div style="color:var(--text-muted);">Settlement Account</div>
                        <strong>Sharma Communication &amp;<br>Digital Seva</strong>
                    </div>
                </div>

                <div class="grid-2">
                    <div class="card">
                        <div class="form-group">
                            <label>Customer Bank</label>
                            <select class="form-control"><option>State Bank of India</option></select>
                        </div>
                        <div class="form-group">
                            <label>Customer 12-Digit Aadhaar Number</label>
                            <input type="text" class="form-control" value="443322110099">
                        </div>
                        <div class="form-group">
                            <label>Customer Mobile Number</label>
                            <input type="text" class="form-control" value="9811002233">
                        </div>
                        <div class="form-group">
                            <label>Collection Amount (₹)</label>
                            <input type="number" class="form-control" value="1500">
                        </div>
                        <div style="background:#f9fafb;padding:0.75rem;border-radius:8px;font-size:0.8rem;margin-bottom:1rem;">
                            <div style="display:flex;justify-content:space-between;color:var(--text-muted);margin-bottom:4px;">
                                <span>MDR Charge (0.35%):</span><span>₹5.25</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;color:var(--green);font-weight:700;">
                                <span>Net Credited to Wallet:</span><span>₹1494.75</span>
                            </div>
                        </div>
                        <button id="aadhaarPayBtn" class="btn-primary full-width" disabled style="opacity:0.5;" onclick="showToast('₹1500 Collected via Aadhaar Pay!')">
                            Collect ₹1500 via Aadhaar
                        </button>
                    </div>

                    <div class="card biometric-box">
                        <strong>Biometric Authentication</strong>
                        <span style="font-size:0.75rem;color:var(--text-muted);">Mantra / Morpho Sensor</span>
                        <div class="fingerprint-icon" id="aadhaarFingerIcon">🖐️</div>
                        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Click above or press button to trigger RD service scanner.</p>
                        <button class="btn-dark" onclick="captureBiometric('aadhaar')">👆 Scan Fingerprint</button>
                    </div>
                </div>
            </div>
        `
    },

    '/services/matm': {
        title: 'mATM',
        render: () => `
            <div class="grid-2" style="max-width:960px;margin:0 auto;">
                <div class="card">
                    <h3>Micro ATM</h3>
                    <div style="margin:1rem 0;display:flex;flex-direction:column;gap:0.6rem;">
                        <button class="btn-outline active" style="text-align:left;display:flex;justify-content:space-between;">
                            <span>💳 Cash Withdraw</span><span>→</span>
                        </button>
                        <button class="btn-outline" style="text-align:left;" onclick="showToast('Balance Enquiry mode selected')">🪙 Balance Enquiry</button>
                        <button class="btn-outline" style="text-align:left;" onclick="showToast('Transaction Status Check selected')">📄 Transaction Status Check</button>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;border:1px solid var(--border);border-radius:10px;padding:1.25rem;text-align:center;margin:1rem 0;">
                        <div style="cursor:pointer;" onclick="state.selectedDevice='paxD180';renderRoute();">
                            <div style="font-size:2.5rem;">📟</div>
                            <div style="font-size:0.8rem;margin-top:4px;">paxD180</div>
                        </div>
                        <div style="cursor:pointer;position:relative;" onclick="state.selectedDevice='morefun';renderRoute();">
                            <span style="position:absolute;top:-6px;right:12px;background:var(--green);color:#fff;border-radius:50%;padding:1px 5px;font-size:0.7rem;">✓</span>
                            <div style="font-size:2.5rem;">📱</div>
                            <div style="font-size:0.8rem;margin-top:4px;font-weight:600;">MoreFun</div>
                        </div>
                    </div>

                    <div style="text-align:center;">
                        <div style="font-size:0.8rem;">Selected Device : <strong>${state.selectedDevice}</strong></div>
                        <div style="color:var(--green);font-size:0.78rem;margin:4px 0 0.75rem;">Device is ready to use.</div>
                        <button class="btn-primary" onclick="showToast('Switched mATM device')">↻ Switch Device</button>
                    </div>
                </div>

                <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;">
                    <div>
                        <div style="text-align:center;margin-bottom:1.5rem;">
                            <h3>Cash Withdrawal</h3>
                            <span style="font-size:0.78rem;color:var(--text-muted);">Send money everytime, Everywhere</span>
                        </div>
                        <div class="form-group">
                            <label>Enter Amount</label>
                            <input type="number" id="matmAmt" class="form-control" placeholder="₹0.0">
                            <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted);margin-top:6px;">
                                <span>Min - ₹100</span><span>₹500</span><span>₹1000</span><span>₹2000</span><span>₹5000</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Mobile Number</label>
                            <input type="text" class="form-control" placeholder="Enter Mobile Number">
                        </div>
                        <div style="background:var(--primary-light);padding:0.75rem 1rem;border-radius:8px;display:flex;justify-content:space-between;font-size:0.82rem;">
                            <span>Retailer Commission:</span>
                            <strong style="color:var(--primary);">+₹3.00</strong>
                        </div>
                    </div>
                    <button class="btn-primary full-width" onclick="showToast('Waiting for customer card insertion on ' + state.selectedDevice + ' device...')">Insert Card</button>
                </div>
            </div>
        `
    },

    '/services/cashout': {
        title: 'Wallet Cashout',
        render: () => `
            <div style="max-width:780px;margin:0 auto;">
                <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Available Settlement Balance</div>
                        <h2 style="font-size:1.75rem;margin:4px 0;">₹${state.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Funds earned from AEPS, mATM &amp; DMT can be transferred to your verified bank 24x7.</div>
                    </div>
                    <span style="background:var(--green-light);color:var(--green);border:1px solid #a7f3d0;padding:0.4rem 0.85rem;border-radius:99px;font-weight:600;font-size:0.78rem;">✓ Instant IMPS Active</span>
                </div>

                <div class="card">
                    <h3>Transfer Funds to Bank Account</h3>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Choose verified account and specify transfer amount.</p>

                    <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.5rem;">Select Verified Settlement Account</label>
                    <div class="grid-2" style="margin-bottom:1.25rem;">
                        <div class="card" style="margin:0;border-color:var(--primary);background:var(--primary-light);">
                            <div style="display:flex;justify-content:space-between;">
                                <strong>HDFC Bank</strong>
                                <span style="background:#dbeafe;color:var(--primary);font-size:0.68rem;padding:2px 6px;border-radius:4px;font-weight:700;">Primary</span>
                            </div>
                            <div style="font-size:0.78rem;margin-top:4px;">A/C: 5010029182736</div>
                            <div style="font-size:0.75rem;color:var(--text-muted);">IFSC: HDFC0000123 • Sector 18 Noida Branch</div>
                        </div>
                        <div class="card" style="margin:0;">
                            <strong>State Bank of India</strong>
                            <div style="font-size:0.78rem;margin-top:4px;">A/C: 30291827361</div>
                            <div style="font-size:0.75rem;color:var(--text-muted);">IFSC: SBIN0001234 • Main Branch Noida</div>
                        </div>
                    </div>

                    <div class="grid-2">
                        <div class="form-group">
                            <label>Transfer Mode</label>
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
                                <button type="button" class="btn-outline active">IMPS (Instant 24×7)</button>
                                <button type="button" class="btn-outline">NEFT (Free - Batch)</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Amount to Transfer</label>
                            <input type="number" class="form-control" value="5000">
                        </div>
                    </div>

                    <div style="background:#f9fafb;padding:0.85rem 1rem;border-radius:8px;font-size:0.82rem;margin-bottom:1rem;">
                        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Transfer Amount:</span><span>₹5000.00</span></div>
                        <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span>Bank IMPS Charge:</span><span>₹5.00</span></div>
                        <div style="display:flex;justify-content:space-between;font-weight:700;border-top:1px solid var(--border);padding-top:6px;">
                            <span>Total Deducted from Wallet:</span><span style="color:var(--primary);">₹5005.00</span>
                        </div>
                    </div>

                    <div class="form-group" style="max-width:240px;">
                        <label>Enter Retailer Security MPIN (Default: 1234)</label>
                        <input type="password" class="form-control" value="1234" style="text-align:center;letter-spacing:4px;">
                    </div>

                    <button class="btn-primary full-width" onclick="processCashout()">Transfer ₹5000 to Bank Account</button>
                </div>
            </div>
        `
    },

    '/kyc/self': {
        title: 'Self KYC Verification',
        render: () => `
            <div style="max-width:860px;margin:0 auto;">
                <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <span style="background:var(--primary-light);color:var(--primary);font-size:0.7rem;padding:2px 8px;border-radius:4px;font-weight:600;">RBI &amp; NPCI BC Compliance</span>
                        <span style="font-size:0.75rem;color:var(--text-muted);margin-left:6px;">Agent Onboarding</span>
                        <h3 style="margin-top:4px;">Retailer Self-KYC Portal</h3>
                        <p style="font-size:0.78rem;color:var(--text-muted);">Complete your digital verification to unlock AEPS, mATM, DMT and BBPS services.</p>
                    </div>
                    <button class="btn-outline" onclick="showToast('KYC Draft saved!')">💾 Save Draft</button>
                </div>

                <div class="card">
                    <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:6px;">
                        <strong>Step 1 of 7: Personal Details</strong>
                        <span style="color:var(--primary);font-weight:600;">14% Completed</span>
                    </div>
                    <div style="height:6px;background:#e5e7eb;border-radius:99px;margin-bottom:1rem;">
                        <div style="width:14%;height:100%;background:var(--primary);border-radius:99px;"></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-muted);flex-wrap:wrap;gap:0.5rem;">
                        <span style="border:1px solid var(--primary);color:var(--primary);padding:4px 10px;border-radius:6px;font-weight:600;">Personal Details</span>
                        <span>Aadhaar e-KYC</span>
                        <span>PAN Verification</span>
                        <span>Shop Details</span>
                        <span>Live Selfie &amp; Sign</span>
                        <span>Bank Settlement</span>
                        <span>Review &amp; Submit</span>
                    </div>
                </div>

                <div class="card">
                    <h3>Step 1: Personal Details</h3>
                    <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1.25rem;">Provide official identity details matching your Aadhaar card.</p>

                    <div class="grid-2">
                        <div class="form-group"><label>Full Legal Name</label><input type="text" class="form-control" value="Ramesh Sharma"></div>
                        <div class="form-group"><label>Date of Birth</label><input type="date" class="form-control" value="1992-06-15"></div>
                        <div class="form-group"><label>Registered Mobile (10 digits)</label><input type="text" class="form-control" value="9876543210"></div>
                        <div class="form-group"><label>Email Address</label><input type="email" class="form-control" value="ramesh.sharma@hookolupay.in"></div>
                    </div>
                    <div class="form-group"><label>Residential Address</label><input type="text" class="form-control" value="Shop 14, Main Market, Sector 18"></div>
                    <div class="grid-2">
                        <div class="form-group"><label>City / District</label><input type="text" class="form-control" value="Noida"></div>
                        <div class="form-group"><label>PIN Code (6 digits)</label><input type="text" class="form-control" value="201301"></div>
                    </div>
                    <div style="text-align:right;margin-top:1rem;">
                        <button class="btn-primary" onclick="showToast('Proceeding to Step 2: Aadhaar e-KYC')">Next: Aadhaar e-KYC →</button>
                    </div>
                </div>
            </div>
        `
    }
};

function renderGenericPage(title, subtitle) {
    return `
        <div class="card" style="text-align:center;padding:3rem 1.5rem;">
            <h3>${title}</h3>
            <p style="color:var(--text-muted);margin:0.5rem 0 1.25rem;">${subtitle}</p>
            <button class="btn-primary" onclick="location.hash='#/dashboard'">← Back to Dashboard</button>
        </div>
    `;
}

// ================= INTERACTIVE HANDLERS =================
function updateRechargeCalc(val) {
    state.rechargeAmount = Number(val) || 0;
    document.getElementById('rechargeComm').textContent = `+₹${(state.rechargeAmount * 0.02).toFixed(2)}`;
    document.getElementById('payRechargeBtn').textContent = `Pay & Recharge ₹${state.rechargeAmount}`;
}

function selectPlan(amt) {
    state.rechargeAmount = amt;
    document.getElementById('rechargeAmtInput').value = amt;
    updateRechargeCalc(amt);
    showToast(`Selected ₹${amt} plan`);
}

function fetchBBPSBill() {
    document.getElementById('bbpsBillResult').innerHTML = `
        <div style="width:100%;text-align:left;">
            <span style="background:var(--green-light);color:var(--green);padding:2px 8px;border-radius:4px;font-size:0.72rem;font-weight:700;">BILL FETCHED</span>
            <h4 style="margin:0.75rem 0 0.25rem;">Consumer: Ramesh Sharma</h4>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:1rem;">Bill Date: 05-Nov-2026 • Due Date: 20-Nov-2026</div>
            <div style="font-size:1.5rem;font-weight:700;margin-bottom:1rem;">₹ 1,420.00</div>
            <button class="btn-primary full-width" onclick="showToast('Electricity Bill Paid! +₹3.50 Commission credited.')">Pay ₹1,420.00 Now</button>
        </div>
    `;
}

function setAepsAmt(amt) {
    state.aepsAmount = amt;
    renderRoute();
}

function captureBiometric(type) {
    showToast('Scanning fingerprint via RD Service...');
    setTimeout(() => {
        showToast('Biometric Captured Successfully!');
        if (type === 'aeps') {
            document.getElementById('aepsFingerIcon').textContent = '✅';
            const btn = document.getElementById('aepsSubmitBtn');
            btn.disabled = false;
            btn.style.opacity = '1';
        } else {
            document.getElementById('aadhaarFingerIcon').textContent = '✅';
            const btn = document.getElementById('aadhaarPayBtn');
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    }, 800);
}

function processCashout() {
    if (state.walletBalance >= 5005) {
        state.walletBalance -= 5005;
        updateWalletUI();
        renderRoute();
        showToast('₹5,000 transferred to HDFC Bank via IMPS!');
    } else {
        showToast('Insufficient wallet balance.');
    }
}

// ================= CLIENT-SIDE ROUTER =================
function renderRoute() {
    const hash = window.location.hash.replace('#', '') || '/login';
    const loginView = document.getElementById('loginView');
    const portalShell = document.getElementById('portalShell');

    if (hash === '/login') {
        loginView.classList.remove('hidden');
        portalShell.classList.add('hidden');
        document.getElementById('loginStep1').classList.remove('hidden');
        document.getElementById('loginStep2').classList.add('hidden');
        return;
    }

    loginView.classList.add('hidden');
    portalShell.classList.remove('hidden');

    // Highlight Active Sidebar Link
    document.querySelectorAll('.nav-item, .sub-item, .kyc-box').forEach(el => {
        el.classList.toggle('active', el.dataset.route === hash);
    });

    const routeConfig = routes[hash];
    const outlet = document.getElementById('routeOutlet');
    const titleEl = document.getElementById('pageTitle');

    if (routeConfig) {
        titleEl.textContent = routeConfig.title;
        outlet.innerHTML = routeConfig.render();
    } else {
        const cleanName = hash.split('/').pop().toUpperCase();
        titleEl.textContent = cleanName;
        outlet.innerHTML = renderGenericPage(`${cleanName} Module`, 'This section is ready for API integration.');
    }
}

// ================= INITIALIZATION & EVENTS =================
document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) {
        window.location.hash = '#/login';
    }
    renderRoute();

    window.addEventListener('hashchange', renderRoute);

    // Step 1 -> Step 2 (Credentials to OTP)
    document.getElementById('credentialsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const mobileVal = document.getElementById('retailerIdInput').value.trim();
        const passVal = document.getElementById('retailerPassInput').value.trim();

        if (!mobileVal || !passVal) {
            showToast('Please enter Retailer ID / Mobile and Password.');
            return;
        }

        const last4 = mobileVal.length >= 4 ? mobileVal.slice(-4) : '3210';
        document.getElementById('maskedMobile').textContent = `****${last4}`;

        document.getElementById('loginStep1').classList.add('hidden');
        document.getElementById('loginStep2').classList.remove('hidden');
        showToast(`OTP sent to ****${last4}`);
    });

    // Step 2 -> Portal Dashboard
    document.getElementById('verifyOtpBtn').addEventListener('click', () => {
        const otp = document.getElementById('otpInput').value.trim();
        if (otp.length === 6) {
            showToast('OTP Verified! Launching Portal...');
            window.location.hash = '#/dashboard';
        } else {
            showToast('Please enter a valid 6-digit OTP.');
        }
    });

    // Change Mobile / ID -> Back to Step 1
    document.getElementById('changeMobileBtn').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginStep2').classList.add('hidden');
        document.getElementById('loginStep1').classList.remove('hidden');
    });

    document.getElementById('resendOtpBtn').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('A new 6-digit OTP has been sent to your registered mobile.');
    });

    document.getElementById('forgotPassLink').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Password reset OTP sent to your registered mobile.');
    });

    // Services Accordion Toggle
    document.getElementById('servicesToggle').addEventListener('click', () => {
        document.getElementById('servicesSubmenu').classList.toggle('hidden');
    });

    // Refresh Wallet Balance
    document.getElementById('refreshWalletBtn').addEventListener('click', () => {
        updateWalletUI();
        showToast('Wallet W1 balance synced with switch.');
    });

    // Logout on Profile Click
    document.getElementById('logoutBtn').addEventListener('click', () => {
        window.location.hash = '#/login';
    });
});