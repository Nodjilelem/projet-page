import SidebarLayout from '../layouts/sideLayout'

const mockWidgets = [
  { title: 'Visiteurs', value: '2,340', color: 'bg-blue-100 text-blue-700' },
  { title: 'Conversions', value: '178', color: 'bg-green-100 text-green-700' },
  { title: 'Temps moyen', value: '3m 42s', color: 'bg-yellow-100 text-yellow-700' },
  { title: 'Pages vues', value: '12,903', color: 'bg-purple-100 text-purple-700' },
  { title: 'Requêtes', value: '1,120', color: 'bg-pink-100 text-pink-700' },
  { title: 'Abandons', value: '47', color: 'bg-red-100 text-red-700' },
]

const Dashboard = () => {
  return (
    <SidebarLayout>
      <div className="space-y-12">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {mockWidgets.map((widget, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-sm ${widget.color} transition hover:scale-105 hover:shadow-md`}
            >
              <h4 className="text-lg font-semibold">{widget.title}</h4>
              <p className="text-2xl font-bold mt-2">{widget.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-64 flex items-center justify-center">
            <span className="text-gray-500">📊 Graphique 1 (à implémenter)</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-64 flex items-center justify-center">
            <span className="text-gray-500">📈 Graphique 2 (à implémenter)</span>
          </div>
        </div>
        
      </div>
    </SidebarLayout>
  )
}

export default Dashboard
