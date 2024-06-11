var isFollowing = false;

function toggleFollow() {
    var followBtn = document.getElementById('followBtn');
    isFollowing = !isFollowing;
    followBtn.innerHTML = isFollowing ? 'Đã theo dõi ✔' : 'Theo dõi';
    followBtn.style.backgroundColor = isFollowing ? '#4CAF50' : '#f44336';
}
