select u.firstName, u.lastName
from user u
LEFT JOIN groupMembership gm ON u.id = gm.userID
LEFT JOIN `group` g ON gm.groupID = g.id
where u.firstName = 'Victor'
AND (g.name IS NULL OR g.name NOT LIKE 'TEST-%');
