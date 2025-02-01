import './Team.css';

const Team = () => {
  const teams = [
    {
      name: 'Hardware Team',
      members: [
        { name: 'Poojaa Sri', phone: '123-456-7890', department: 'CSE', email: 'pooja@betshow.com' },
        { name: 'Ravina Shan', phone: '987-654-3210', department: 'CSE', email: 'ravina@betshow.com' },
        { name: 'Tharun', phone: '888-654-3210', department: 'CSE', email: 'tharun@betshow.com' },
        { name: 'Sabarish', phone: '889-654-3210', department: 'CSE', email: 'sabarish@betshow.com' },
        { name: 'Ashwin', phone: '987-654-3210', department: 'CSE', email: 'ashwin@betshow.com' },
        { name: 'Jashwanth', phone: '779-654-3210', department: 'CSE', email: 'jashwanth@betshow.com' },
        { name: 'Enbasagar', phone: '987-654-3210', department: 'CSE', email: 'enba@betshow.com' },
      ]
    },
    {
      name: 'Software Team',
      members: [
        { name: 'Mahathi', phone: '111-123-4567', department: 'CSBS', email: 'mahathi@betshow.com' },
        { name: 'Sai Pavithra', phone: '111-764-4321', department: 'CSE', email: 'sai@betshow.com' },
        { name: 'Yuvanesh', phone: '222-876-5432', department: 'AIML', email: 'yuva@betshow.com' },
        { name: 'Tharun Krishna', phone: '114-876-5432', department: 'CSE', email: 'tharunkrishna@betshow.com' },
        { name: 'Sylesh Pavendan', phone: '333-876-5432', department: 'CSE', email: 'sylesh@betshow.com' },
        { name: 'Smilie', phone: '144-876-5432', department: 'CSE', email: 'smilie@betshow.com' },
        { name: 'Swaytha', phone: '112-876-5432', department: 'CSE', email: 'swaytha@betshow.com' },
        { name: 'Kaushik', phone: '221-876-5432', department: 'CSE', email: 'kaushik@betshow.com' },
        { name: 'Mohana Varsha', phone: '999-876-5432', department: 'CSE', email: 'varsha@betshow.com' },
        { name: 'Shreecharan Kannan', phone: '222-234-5678', department: 'CSE', email: 'shreecharan@betshow.com' },
        { name: 'Yashwanth', phone: '102-876-5432', department: 'CSE', email: 'yash@betshow.com' },
      ]
    },
    {
      name: 'Research Team',
      members: [
        { name: 'Gomathi', phone: '889-654-3210', department: 'CSE', email: 'gomathi@betshow.com' },
        { name: 'Sreesanth', phone: '987-654-3210', department: 'CSE', email: 'sreesanth@betshow.com' },
        { name: 'Kavya', phone: '779-654-3210', department: 'CSE', email: 'kavya@betshow.com' },
        { name: 'Eashwar', phone: '987-654-3210', department: 'CSE', email: 'eashwar@betshow.com' },
      ]
    }
  ];

  return (
    <div className="team">
      <h1>Meet Our Teams</h1>

      {teams.map((team, index) => (
        <div key={index} className="team-section">
          <h2>{team.name}</h2>
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {team.members.map((member, idx) => (
                <tr key={idx}>
                  <td>{member.name}</td>
                  <td>{member.phone}</td>
                  <td>{member.department}</td>
                  <td><a href={`mailto:${member.email}`}>{member.email}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Team;


