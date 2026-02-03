export default function AdminDashboard() {
    const stats = [
        { label: "Total Properties", value: "3", color: "bg-blue-500" },
        { label: "Available Properties", value: "3", color: "bg-green-500" },
        { label: "Total Inquiries", value: "12", color: "bg-orange-500" },
        { label: "New Inquiries", value: "12", color: "bg-red-500" },
    ];

    const actions = [
        { label: "Add New Property", icon: "plus" },
        { label: "Manage Properties", icon: "home" },
        { label: "View Inquiries", icon: "mail" },
        { label: "View Website", icon: "globe" },
    ];

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
                <p className="text-gray-500">Welcome back! Here's your overview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                        <div className={`h-12 w-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
                            {/* Icon based on index or type */}
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8">Quick Actions</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {actions.map((action, index) => (
                        <button key={index} className="flex flex-col items-center justify-center p-8 rounded-xl bg-accent hover:bg-secondary hover:text-white transition-all group">
                            <div className="h-10 w-10 mb-4 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                                {/* Action Icons */}
                                <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <span className="font-semibold text-sm">{action.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
