select u.firstName, u.lastName, g.name AS groupName
from user u
JOIN groupMembership gm ON u.id = gm.userID
JOIN `group` g ON gm.groupID = g.id
where u.created < g.created;
