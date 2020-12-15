from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect

from user_profile.models import UserProfile


@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
  permission_classes = (permissions.AllowAny,)

  def post(self, request, format=None):
    data = self.request.data

    username = data['username']
    password = data['password']
    re_password = data['re_password']

    if password == re_password:
      if User.objects.filter(username=username).exists():
        return Response({"error": "username already exists"})
      else:
        if len(password) < 6:
          return Response({"error": "password must be at least 6 characters"})
        else:
          user = User.objects.create_user(
            username=username,
            password=password
          )
          user.save()
          
          user = User.objects.get(username=username)
          user_profile = UserProfile(user, first_name='', last_name='', phone='', city='')
          user_profile.save()

          return Response({'success': 'User created successfully'})

    else: 
      return Response({"error": "passwords do not match"})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
  permission_classes = (permissions.AllowAny,)

  def get(self, request, format=None):
    return Response({'success': 'CSRF cookie set'})
