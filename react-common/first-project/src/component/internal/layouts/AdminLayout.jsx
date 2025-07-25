import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="">
      <AdminSidebar />
      {children}
    </div>
  );
}

export default AdminLayout;
