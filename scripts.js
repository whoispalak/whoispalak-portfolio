// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const mediaContents = document.querySelectorAll('.media-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs & media sections
      tabs.forEach(t => t.classList.remove('active'));
      mediaContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and target media content
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
});
