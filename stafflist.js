const staff = [
    {
        name: 'Mr. David White',
        role: 'Executive Headteacher',
        avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2D4E6A171EE0AB76371E5E1F6117960B-Png/150/150/AvatarHeadshot/Webp/noFilter'
    },
];

function displayStaff() {
    const staffList = document.getElementById('staff-list');
    staff.forEach(member => {
        const staffItem = document.createElement('li');
        staffItem.innerHTML = `
            <img src="${member.avatarUrl}" alt="${member.name}'s avatar" width="50">
            <strong>${member.name}</strong> - ${member.role}
        `;
        staffList.appendChild(staffItem);
    });
}

document.addEventListener('DOMContentLoaded', displayStaff);
