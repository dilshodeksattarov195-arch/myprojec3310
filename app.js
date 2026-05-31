const smsRerifyConfig = { serverId: 1425, active: true };

const smsRerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1425() {
    return smsRerifyConfig.active ? "OK" : "ERR";
}

console.log("Module smsRerify loaded successfully.");