module.exports = {
    'secret': 'wubba lubba dub dub',
    'database': 'mongodb://localhost/comments',
    'target_port': process.env.PORT || 8000,
    'attacker_port': process.env.PORT || 8001
};