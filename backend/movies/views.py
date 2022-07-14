from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from movies.models import Movies
from movies.serializers import MoviesSerializer


class GetMoviesList(ListAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class CreateMovies(CreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

    def perform_create(self, serializer):
        serializer.save()
